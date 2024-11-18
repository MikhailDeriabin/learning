using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Crash : MonoBehaviour
{
    [SerializeField] float sceneReloadDelayS = 0.5f;
    [SerializeField] Collider2D head;
    [SerializeField] ParticleSystem crashingEffect;
    [SerializeField] AudioClip crashingSound;

    private bool _isCrashed = false;
    public bool GetIsCrashed() => _isCrashed;

    void Start()
    {
        _isCrashed = false;
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (!_isCrashed && collision.otherCollider == head)
        {
            FindFirstObjectByType<PlayerController>().DisableControls();
            crashingEffect.Play();
            GetComponent<AudioSource>().PlayOneShot(crashingSound);
            
            _isCrashed = true;
            Invoke("ReloadScene", sceneReloadDelayS);
        }
    }

    void ReloadScene()
    {
        SceneManager.LoadScene(0);
    }
}
