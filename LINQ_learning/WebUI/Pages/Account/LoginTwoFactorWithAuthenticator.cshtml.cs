using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApp.Data.Account;

namespace WebUI.Pages.Account
{
    public class LoginTwoFactorWithAuthenticatorModel : PageModel
    {
        private readonly SignInManager<User> signInManager;

        [BindProperty]
        public AuthenticatorMFAViewModel AuthenticatorMFA { get; set; }

        public LoginTwoFactorWithAuthenticatorModel(SignInManager<User> signInManager)
        {
            AuthenticatorMFA = new AuthenticatorMFAViewModel();
            this.signInManager = signInManager;
        }

        public void OnGet(bool rememberMe)
        {
            AuthenticatorMFA.SecurityCode = string.Empty;
            AuthenticatorMFA.RememberMe = rememberMe;
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid) return Page();

            var result = await signInManager.TwoFactorAuthenticatorSignInAsync(
                AuthenticatorMFA.SecurityCode,
                AuthenticatorMFA.RememberMe,
                false);

            if (result.Succeeded)
            {
                return RedirectToPage("/Index");
            }
            
            if (result.IsLockedOut)
            {
                ModelState.AddModelError("Authenticator2FA", "You are locked out.");
            }
            else
            {
                ModelState.AddModelError("Authenticator2FA", "Failed to login.");
            }

            return Page();
        }
    }

    public class AuthenticatorMFAViewModel
    {
        [Required]
        [Display(Name = "Code")]
        public string SecurityCode { get; set; } = string.Empty;

        public bool RememberMe { get; set; }
    }
}
