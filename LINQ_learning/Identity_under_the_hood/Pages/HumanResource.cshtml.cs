using System.Net.Http.Headers;
using Identity_under_the_hood.Authorization;
using Identity_under_the_hood.Pages.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using WebApp_UnderTheHood.DTO;

namespace Identity_under_the_hood.Pages;

[Authorize(Policy = "MustBeHR")]
public class HumanResource : PageModel
{
    private readonly IHttpClientFactory _httpClientFactory;

    [BindProperty]
    public List<WeatherForecastDTO> WeatherForecastItems { get; set; } = new ();
    
    public HumanResource(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    public async Task OnGetAsync()
    {
        var client = _httpClientFactory.CreateClient("OurWebAPI");
        var resp = await client.PostAsJsonAsync("auth", new Credential{UserName = "admin", Password = "password"});
        resp.EnsureSuccessStatusCode();
        var jwt = await resp.Content.ReadAsStringAsync();
        var token = JsonConvert.DeserializeObject<JwtToken>(jwt);

        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token?.AccessToken??"");
        WeatherForecastItems = await client.GetFromJsonAsync<List<WeatherForecastDTO>>("weatherforecast") ?? new List<WeatherForecastDTO>();
    }
}