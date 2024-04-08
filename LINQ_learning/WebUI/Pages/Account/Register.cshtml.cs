using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using WebApp.Data.Account;

namespace WebApp.Pages.Account
{
    public class RegisterModel : PageModel
    {

        private readonly UserManager<User> userManager;
        
        public RegisterModel(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }

        [BindProperty]
        public RegisterViewModel RegisterViewModel { get; set; } = new RegisterViewModel();

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid) return Page();

            // Validate Email Address (optional)

            // Create the user
            var user = new User
            {
                Email = RegisterViewModel.Email,
                UserName = RegisterViewModel.Email,                
            };

            var claimDepartment = new Claim("Department", RegisterViewModel.Department);
            var claimPosition = new Claim("Position", RegisterViewModel.Position);

            var result = await userManager.CreateAsync(user, RegisterViewModel.Password);
            if (result.Succeeded)
            {
                await userManager.AddClaimAsync(user, claimDepartment);
                await userManager.AddClaimAsync(user, claimPosition);
            
                var confirmationToken = await userManager.GenerateEmailConfirmationTokenAsync(user);
                return Redirect(Url.PageLink(pageName: "/Account/ConfirmEmail",
                    values: new { userId = user.Id, token = confirmationToken }) ?? "");
            
                //////////////////////////////////////////////////////////////
                // To trigger the email confirmation flow, use the code below
                //////////////////////////////////////////////////////////////
                
                //var confirmationLink = Url.PageLink(pageName: "/Account/ConfirmEmail",
                //    values: new { userId = user.Id, token = confirmationToken })??"";
            
                //await emailService.SendAsync("frankliu.associates@gmail.com",
                //    user.Email,
                //    "Please confirm your email",
                //    $"Please click on this link to confirm your email address: {confirmationLink}");
            
                //return RedirectToPage("/Account/Login");
            }

            return Page();
        }
    }

    public class RegisterViewModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; } = string.Empty;

        [Required]
        [DataType(dataType: DataType.Password)]
        public string Password { get; set; } = string.Empty;

        // [Required]
        public string Department { get; set; } = string.Empty;

        // [Required]
        public string Position { get; set; } = string.Empty;
    }
}
