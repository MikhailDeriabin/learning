using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace AuthAPI.Controllers;

[Route("[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration configuration;

    public AuthController(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    [HttpPost]
    public IActionResult Authenticate([FromBody] Credential credential)
    {
        if (credential.UserName != "admin" && credential.Password != "password")
        {
            ModelState.AddModelError("Unauthorized", "Wrong credentials");
            return Unauthorized(ModelState);
        }
        
        var claims = new List<Claim>
        {
            new (ClaimTypes.Name, credential.UserName),
            new ("Department", "HR")
        };

        var expiresAt = DateTime.UtcNow.AddMinutes(10);
        
        return Ok(new
        {
            accessToken = GenerateToken(claims, expiresAt),
            expiresAt
        });
    }

    private string GenerateToken(IEnumerable<Claim> claims, DateTime expireAt)
    {
        var securityKey = Encoding.ASCII.GetBytes("super_secret_key_and_also_super_long");
        var jwt = new JwtSecurityToken(
            claims: claims, 
            notBefore: DateTime.UtcNow, 
            expires: expireAt, 
            signingCredentials: new SigningCredentials(
                new SymmetricSecurityKey(securityKey), 
                SecurityAlgorithms.HmacSha256Signature)
            );
        
        return new JwtSecurityTokenHandler().WriteToken(jwt);
    }
    
    public class Credential
    {
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}

