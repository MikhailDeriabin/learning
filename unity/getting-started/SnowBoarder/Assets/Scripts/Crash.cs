using Unity.VisualScripting;
using UnityEngine;

public class Crash : MonoBehaviour
{
    [SerializeField] Collider2D head;
    
    void OnCollisionEnter2D(Collision2D collision)
    {
        Debug.Log(collision.collider);
        if (collision.collider == head)
        {
            Debug.Log("You loose!");
        }
    }
}
