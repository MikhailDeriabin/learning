using Application.Core;
using MediatR;
using Persistence;

namespace Application.Activities;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid Id { get; init; }
    }
    
    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var activityToDelete = await _context.Activities.FindAsync(request.Id);
            if(activityToDelete == null)
                return null;
            
            //Update the DB state in RAM
            _context.Remove(activityToDelete);

            //Actually send a query to DB
            var result = await _context.SaveChangesAsync() > 0;

            return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Could not delete the activity");
        }
    }
}