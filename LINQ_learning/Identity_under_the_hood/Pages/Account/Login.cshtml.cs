using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Identity_under_the_hood.Pages.Account;
public class LoginModel : PageModel
{
    [BindProperty]
    public Credential Credential { get; set; } = new ();

    public void OnGet()
    {
    }

    public async Task<IActionResult> OnPostAsync()
    {
        if(!ModelState.IsValid)
            return Page();

        //Verify credential
        if (Credential.UserName == "admin" && Credential.Password == "password")
        {
            //Create a security context
            //Describe who it is
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, "admin"),
                new Claim(ClaimTypes.Email, "admin@gmail.com"),
                new Claim("Department", "HR"),
                new Claim("MustBeHR", "true")
            };
            
            //Access token
            var identity = new ClaimsIdentity(claims, "MyCookieAuth");

            //user, who is wanna to access a resource
            var principal = new ClaimsPrincipal(identity);
            await HttpContext.SignInAsync("MyCookieAuth", principal);
            
            return RedirectToPage("/Index");
        }
        
        return Page();
    }
}

public class Credential()
{
    [Required]
    [Display(Name = "User Name")]
    public string UserName { get; set; } = string.Empty;
    
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; } = string.Empty;
}