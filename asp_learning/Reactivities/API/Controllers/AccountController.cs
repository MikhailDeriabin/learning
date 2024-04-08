using System.Security.Claims;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    public AccountController(UserManager<AppUser> userManager, TokenService tokenService)
    {
        _userManager = userManager;
        _tokenService = tokenService;
    }
    
    private readonly UserManager<AppUser> _userManager;
    private readonly TokenService _tokenService;

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login([FromBody] LoginDto loginDto)
    {
        var user = await _userManager.FindByEmailAsync(loginDto.Email);
        if (user == null)
            return Unauthorized();

        var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);

        if (!result)
            return Unauthorized();

        return ParseToUserDto(user);
    }
    
    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register([FromBody] RegisterDto registerDto)
    {
        var isUserExists = await _userManager.Users.AnyAsync(u => u.UserName == registerDto.Username);
        if (isUserExists)
            return BadRequest("This username is already taken");

        var isEmailExists = await _userManager.Users.AnyAsync(u => u.Email == registerDto.Email);
        if (isEmailExists)
            return BadRequest("This email is already taken");
        
        var newUser = new AppUser
        {
            DisplayNAme = registerDto.DisplayNAme,
            UserName = registerDto.Username,
            Email = registerDto.Email
        };

        var result = await _userManager.CreateAsync(newUser, registerDto.Password);

        if (!result.Succeeded)
            return BadRequest(result.Errors);
        
        return ParseToUserDto(newUser);
    }
    
    [HttpGet]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
        var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
        return ParseToUserDto(user);
    }
    
    private ActionResult<UserDto> ParseToUserDto(AppUser user)
    {
        return new UserDto
        {
            DisplayNAme = user.DisplayNAme,
            Image = null,
            Token = _tokenService.CreateToken(user),
            Username = user.UserName
        };
    }

}