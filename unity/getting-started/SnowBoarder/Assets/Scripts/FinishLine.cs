using Unity.VisualScripting;
using UnityEngine;

public class FinishLine : MonoBehaviour
{
    void OnTriggerEnter2D(Collider2D obj)
    {
        if (obj.tag == Tags.Player)
        {
            Debug.Log("Congrats, you won!");
        }
    }
}
