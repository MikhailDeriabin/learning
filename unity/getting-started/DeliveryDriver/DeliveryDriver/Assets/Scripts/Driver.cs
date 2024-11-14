using UnityEngine;

public class Driver : MonoBehaviour
{
    
    float moveSensitivity = 3f;
    
    float steerSensitivity = 40f;

    void Start()
    {
    }

    void Update()
    {
        var steerAmount = -Input.GetAxis("Horizontal") * steerSensitivity * Time.deltaTime;
        var moveAmount = Input.GetAxis("Vertical") * moveSensitivity * Time.deltaTime;

        transform.Rotate(0, 0, steerAmount);
        if(moveAmount >= 0)
            transform.Translate(0, moveAmount, 0);

        
    }
}
