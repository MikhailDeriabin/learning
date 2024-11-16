using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] float torque = 10;
    Rigidbody2D playerRB;

    void Start()
    {
        playerRB = GetComponent<Rigidbody2D>();
    }


    void Update()
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
