using Newtonsoft.Json;

namespace Identity_under_the_hood.Authorization;

public class JwtToken
{
    [JsonProperty("accessToken")]
    public string AccessToken { get; set; } = string.Empty;
    
    [JsonProperty("expiresAt")]
    public DateTime ExpiresAt { get; set; }
}