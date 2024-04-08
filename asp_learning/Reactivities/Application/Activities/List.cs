using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities;

public class List
{
    public class Query : IRequest<Result<List<ActivityDto>>>{}
    
    public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        //cancellation token can be used for cancelling the request.
        //Cancelling may happen if the user close the browser,
        //for example if something took too long to be processed
        //U may get that parameter in the controller and get it here
        public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            //Get the related table with Include, also u may add ThenInclude to include AppUsers table as well
            var result = await _context
                .Activities
                .Include(a => a.Attendees)
                .ThenInclude(u => u.AppUser)
                .ToListAsync();

            //U may also query like that, it will select only requered fields from DB. ProjectTo is from automapper
            // var result1 = await _context
            //     .Activities
            //     .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
            //     .ToListAsync();
            
            var activitiesToReturn = _mapper.Map<List<Activity>, List<ActivityDto>>(result);
            
            return Result<List<ActivityDto>>.Success(activitiesToReturn);
        }
    }
}