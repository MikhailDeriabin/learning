using UnityEngine;

public class Timer : MonoBehaviour
{
    [SerializeField] float questionTimeS = 30f;
    [SerializeField] float rightAnswerTimeS = 5f;
    float timeLeft;

    public bool IsLoadingNextQuestion { get; set; }
    public bool IsAnsweringQuestion { get; set; } = false;
    public float TimerFill { get; set; }

    void Update()
    {
        UpdateTimer();
    }

    public void CancelTimer()
    {
        timeLeft = 0;
    }

    void UpdateTimer()
    {
        timeLeft -= Time.deltaTime;

        if (timeLeft <= 0)
        {
            FlipTimer();
            return;
        }

        TimerFill = IsAnsweringQuestion ?
            timeLeft / questionTimeS :
            timeLeft / rightAnswerTimeS;
    }

    void FlipTimer()
    {
        IsLoadingNextQuestion = true;
        timeLeft = IsAnsweringQuestion ? rightAnswerTimeS : questionTimeS;
        IsAnsweringQuestion = !IsAnsweringQuestion;
    }
}
