using UnityEngine;
using UnityEngine.InputSystem;


public class PlayerMovement : MonoBehaviour
{
    Vector2 moveInput;
    Rigidbody2D playerBody;
    Animator playerAnimator;

    CapsuleCollider2D playerCollider;

    [SerializeField] float runMultiplier = 3.5f;
    [SerializeField] float climbMultiplier = 2;
    [SerializeField] float jumpMultiplier = 11;


    PlayerState playerState;

    void Start()
    {
        playerBody = GetComponent<Rigidbody2D>();
        playerAnimator = GetComponent<Animator>();
        playerCollider = GetComponent<CapsuleCollider2D>();
    }

    void Update()
    {
        UpdatePlayerPosition();

        if (IsOnLadder())
        {
            Climb();
            AnimateClimb();
        }
        else
        {
            Run();
            AnimateRun();
        }
    }

    void OnMove(InputValue value)
    {
        moveInput = value.Get<Vector2>();
    }

    void OnJump(InputValue value)
    {
        if (!IsOnGround())
            return;

        if (value.isPressed)
            playerBody.linearVelocityY += jumpMultiplier;
    }

    void UpdatePlayerPosition()
    {
        if (IsOnLadder())
        {
            playerState.postion = PlayerPosition.;
            return;
        }

        if (IsOnGround())
        {
            position = PlayerPosition.Ground;
            return;
        }

        position = PlayerPosition.Air;
    }

    void Run()
    {
        playerBody.linearVelocityX = moveInput.x * runMultiplier;
    }

    void Climb()
    {
        playerBody.linearVelocityY = moveInput.y * climbMultiplier;
    }

    void AnimateRun()
    {
        if (IsMovingX())
            FlipSprite();

        playerAnimator.SetBool("isRunning", IsMovingX());
    }

    void AnimateClimb()
    {
        playerAnimator.SetBool("isClimbing", IsClimbing());
    }

    void FlipSprite()
    {
        transform.localScale = new Vector2(Mathf.Sign(playerBody.linearVelocityX), 1);
    }

    bool IsMovingX()
    {
        return Mathf.Abs(playerBody.linearVelocityX) > Mathf.Epsilon;
    }
    bool IsMovingY()
    {
        return Mathf.Abs(playerBody.linearVelocityY) > Mathf.Epsilon;
    }
    bool IsMovingUp()
    {
        return playerBody.linearVelocityY > Mathf.Epsilon;
    }

    bool IsOnGround()
    {
        var layer = LayerMask.GetMask("Ground");
        return playerCollider.IsTouchingLayers(layer);
    }

    bool IsClimbing()
    {
        return IsOnLadder() && IsMovingY();
    }

    bool IsOnLadder()
    {
        var layer = LayerMask.GetMask("Climbing");
        return playerCollider.IsTouchingLayers(layer);
    }
}