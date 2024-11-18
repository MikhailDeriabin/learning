using Unity.VisualScripting;
using UnityEngine;

public class SnowboardEffect : MonoBehaviour
{
    [SerializeField] ParticleSystem snowBoardEffect;
    Crash _crash;

    void Start(){
        _crash = FindFirstObjectByType<Crash>();
    }

    void OnCollisionEnter2D(Collision2D obj)
    {
        if (!_crash.GetIsCrashed() || obj.gameObject.tag == Tags.Bottom)
        {
            snowBoardEffect.Play();
        }
    }

    void OnCollisionExit2D(Collision2D obj)
    {
        if (obj.gameObject.tag == Tags.Bottom)
        {
            snowBoardEffect.Stop();
        }
    }
}
