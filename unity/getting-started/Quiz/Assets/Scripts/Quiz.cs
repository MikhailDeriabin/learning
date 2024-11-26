using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Quiz : MonoBehaviour
{
    [Header("Questinos")]
    [SerializeField] TextMeshProUGUI questionText;
    [SerializeField] QuestionSO question;

    [Header("Answers")]
    [SerializeField] GameObject[] answerBtns;
    bool hasAnsweredEarly;

    [Header("Button sprites")]
    [SerializeField] Sprite defaultAnswerSprite;
    [SerializeField] Sprite correctAnswerSprite;

    [Header("Timer")]
    [SerializeField] Image timerImage;
    Timer timer;

    void Start()
    {
        timer = FindAnyObjectByType<Timer>();
        InitQuestion();
    }

    void Update()
    {
        timerImage.fillAmount = timer.TimerFill;
        if (timer.IsLoadingNextQuestion)
        {
            DisplayNextQuestion();
            timer.IsLoadingNextQuestion = false;
        }
        else if (!hasAnsweredEarly && !timer.IsAnsweringQuestion)
        {
            DisplayAnswer(-1);
            SetBtnsState(false);
        }
    }

    public void OnAnswerSelected(int selectedAnswer)
    {
        DisplayAnswer(selectedAnswer);

        SetBtnsState(false);
        timer.CancelTimer();
    }

    void DisplayNextQuestion()
    {
        ResetBtnsSprite();
        InitQuestion();
        SetBtnsState(true);
    }

    void InitQuestion()
    {
        questionText.text = question.GetQuestion();
        for (int i = 0; i < answerBtns.Length; i++)
        {
            var buttonText = answerBtns[i].GetComponentInChildren<TextMeshProUGUI>();
            buttonText.text = question.GetAnswer(i);
        }
    }

    void DisplayAnswer(int selectedAnswer)
    {
        var rightAnswer = question.GetRightAnswer();
        var rightAnswerText = question.GetAnswer(rightAnswer);
        HighlightAnswerBtn(rightAnswer);

        if (selectedAnswer == rightAnswer)
            questionText.text = "Correct!";
        else
            questionText.text = $"Nope, it is {rightAnswerText}";
    }

    void HighlightAnswerBtn(int btnIndex)
    {
        var rightAnswerImage = answerBtns[btnIndex].GetComponent<Image>();
        rightAnswerImage.sprite = correctAnswerSprite;
    }

    void SetBtnsState(bool isEnabled)
    {
        for (int i = 0; i < answerBtns.Length; i++)
            answerBtns[i].GetComponent<Button>().interactable = isEnabled;
    }

    void ResetBtnsSprite()
    {
        for (int i = 0; i < answerBtns.Length; i++)
            answerBtns[i].GetComponent<Image>().sprite = defaultAnswerSprite;
    }
}
