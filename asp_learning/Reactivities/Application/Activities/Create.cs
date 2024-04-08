using Application.Core;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities;

public class Create
{ 
    public class Command : IRequest<Result<Unit>>
    {
        public Activity Activity{ get; init; }
    } 
    
    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(a => a.Activity).SetValidator(new ActivityValidator());
        }
    }
    
    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IUserAccessor userAccessor)
        {
            _context = context;
            _userAccessor = userAccessor;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(appUser => appUser.UserName == _userAccessor.GetUserName());

            var attendee = new ActivityAttendee
            {
                AppUser = user,
                Activity = request.Activity,
                IsHost = true
            };
            request.Activity.Attendees.Add(attendee);
            
            _context.Activities.Add(request.Activity);
            var result = await _context.SaveChangesAsync() > 0;
            return !result ? Result<Unit>.Failure("Could not create") : Result<Unit>.Success(Unit.Value);
        }
    }
}