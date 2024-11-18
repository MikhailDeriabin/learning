using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] float torque = 10;
    [SerializeField] float normalSpeed = 10;
    [SerializeField] float boostSpeed = 20;

    bool canMove = true;

    Rigidbody2D playerRB;
    SurfaceEffector2D surfaceEffector2D;

    void Start()
    {
        playerRB = GetComponent<Rigidbody2D>();
        surfaceEffector2D = FindFirstObjectByType<SurfaceEffector2D>();
    }


    void Update()
    {
        if (canMove)
        {
            RotatePlayer();
            RespondToBoost();
        }

    }

    void RespondToBoost()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            surfaceEffector2D.speed = boostSpeed;
        }
        else
        {
            surfaceEffector2D.speed = normalSpeed;
        }

    }

    public void DisableControls()
    {
        canMove = false;
    }

    void RotatePlayer()
    {
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            playerRB.AddTorque(torque);
        }
        else if (Input.GetKey(KeyCode.RightArrow))
        {
            playerRB.AddTorque(-torque);
        }
    }
}
