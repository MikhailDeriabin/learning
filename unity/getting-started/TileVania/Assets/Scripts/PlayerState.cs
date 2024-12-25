

public class PlayerState
{
    public PlayerPosition position { get; set; }
    public PlayerMotion motion { get; set; }
}

public enum PlayerPosition
{
    Ground,
    Air,
    Ladder,
    Water
}

public enum PlayerMotion
{
    Idle,
    Run,
    Climb,
    IdleClimb,
    Jump,
    Swim
}