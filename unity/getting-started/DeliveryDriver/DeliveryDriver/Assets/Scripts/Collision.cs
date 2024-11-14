using Unity.VisualScripting;
using UnityEngine;

public class Collision : MonoBehaviour
{
    void OnCollisionEnter2D()
    {
        Debug.Log("Ups...");
    }

    void OnTriggerEnter2D()
    {
        Debug.Log("Look where you go!");
    }
}