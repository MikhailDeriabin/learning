using TMPro;
using UnityEngine;

[CreateAssetMenu(fileName = "Question", menuName = "Quiz Question")]
public class QuestionSO : ScriptableObject
{
    [TextArea(2, 6)]
    [SerializeField]
    string question = "";

    [SerializeField]
    string[] answers = new string[4];

    [SerializeField] int rightAnswer;

    public string GetQuestion() => question;
    public int GetRightAnswer() => rightAnswer;
    public string GetAnswer(int index) => index < answers.Length ? answers[index] : null;
}