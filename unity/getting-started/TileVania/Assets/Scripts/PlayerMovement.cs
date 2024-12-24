using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerMovement : MonoBehaviour
{
    Vector2 moveInput;
    Rigidbody2D playerBody;

    [SerializeField] float runMultiplier = 2;

    void Start()
    {
        playerBody = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        Run();
    }

    void OnMove(InputValue value)
    {
        moveInput = value.Get<Vector2>();
    }

    void Run()
    {
        playerBody.linearVelocityX = moveInput.x * runMultiplier;
        FlipSprite();
    }

    void FlipSprite()
    {
        bool isPlayerMoving = Mathf.Abs(playerBody.linearVelocityX) > Mathf.Epsilon;

        if (isPlayerMoving)
            transform.localScale = new Vector2(Mathf.Sign(playerBody.linearVelocityX), 1);
    }
}
