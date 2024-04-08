using Microsoft.AspNetCore.Authorization;

namespace Identity_under_the_hood.Authorization;

//It will check whever the HR is in probation period or not
public class HRManagerRequirement : IAuthorizationRequirement
{
    public int ProbationMonths { get; }


    public HRManagerRequirement(int probationMonths)
    {
        ProbationMonths = probationMonths;
    }
    
    //this is the actual checker
    public class HRManagerRequirementHandler : AuthorizationHandler<HRManagerRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, HRManagerRequirement requirement)
        {
            //If logged user does not has that claim => reject
            if(!context.User.HasClaim( claim => claim.Type == "EmploymentDate" ))
                return Task.CompletedTask;

            var isParsed = DateTime.TryParse(context.User.FindFirst( claim => claim.Type == "EmploymentDate" )?.Value, out DateTime date);
            if(!isParsed)
                return Task.CompletedTask;

            var period = DateTime.Now - date;
            if (period.Days > 30 * requirement.ProbationMonths)
                context.Succeed(requirement);
            
            return Task.CompletedTask;
        }
    }
}