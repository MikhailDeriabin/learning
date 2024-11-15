using UnityEngine;

public class Driver : MonoBehaviour
{

    const float _moveNormalSpeed = 5f;
    const float _steerNormalSpeed = 50f;

    const float _moveSpeedUpSpeed = 10f;
    const float _steerSpeedUpSpeed = 80f;

    float _moveSpeed = _moveNormalSpeed;
    float _steerSpeed = _steerNormalSpeed;

    void OnCollisionEnter2D()
    {
        _moveSpeed = _moveNormalSpeed;
        _steerSpeed = _steerNormalSpeed;
    }

    void OnTriggerEnter2D(Collider2D obj)
    {
        if (obj.tag == Tags.SpeedUp)
        {
            _moveSpeed = _moveSpeedUpSpeed;
            _steerSpeed = _steerSpeedUpSpeed;
        }
    }

    void Update()
    {
        var steerAmount = -Input.GetAxis("Horizontal") * _steerSpeed * Time.deltaTime;
        var moveAmount = Input.GetAxis("Vertical") * _moveSpeed * Time.deltaTime;

        transform.Rotate(0, 0, steerAmount);
        if (moveAmount >= 0)
            transform.Translate(0, moveAmount, 0);
    }
}
