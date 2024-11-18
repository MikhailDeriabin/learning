using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class FinishLine : MonoBehaviour
{
    [SerializeField] public float sceneReloadDelayS = 2;
    [SerializeField] ParticleSystem finishEffect;

    void OnTriggerEnter2D(Collider2D obj)
    {
        if (obj.tag == Tags.Player)
        {
            finishEffect.Play();
            GetComponent<AudioSource>().Play();
            Invoke("ReloadScene", sceneReloadDelayS);
        }
    }

    void ReloadScene()
    {
        SceneManager.LoadScene(0);
    }
}
