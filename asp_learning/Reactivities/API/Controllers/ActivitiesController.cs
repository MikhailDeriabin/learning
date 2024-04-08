using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    //ActionResult is used for adding status codes and headers automatically 
    [HttpGet] // /api/activities
    public async Task<IActionResult> GetActivities()
    {
        //Send request to another project (Application), it is coming from the BaseApiController
        var result = await Mediator.Send(new List.Query());
        return HandleResponse(result);
    }

    [HttpGet("{id}")] // /api/activities/:id
    public async Task<IActionResult> GetActivityById(Guid id)
    {
        var result = await Mediator.Send(new Details.Query{Id = id});
        return HandleResponse(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity([FromBody] Activity activity)
    {
        var result = await Mediator.Send(new Create.Command{ Activity = activity });
        return HandleResponse(result);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateActivity([FromRoute] Guid id, [FromBody] Activity activity)
    {
        activity.Id = id;
        var result = await Mediator.Send(new Edit.Command{ Activity = activity });
        return HandleResponse(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity([FromRoute] Guid id)
    {
        var result = await Mediator.Send(new Delete.Command{Id = id});
        return HandleResponse(result);
    }
}