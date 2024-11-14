using UnityEngine;

public class FollowingCamera : MonoBehaviour
{
    [SerializeField]
    GameObject playerToFollow;
    void LateUpdate()
    {
        var playerPosition = playerToFollow.transform.position;
        transform.position = playerPosition + new Vector3(0, 0, -10);
    }
}
