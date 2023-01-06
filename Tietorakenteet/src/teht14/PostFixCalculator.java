package teht14;

import java.util.Stack;

public class PostFixCalculator {
    public double calculate(String userInput) {
        String postfixForm = convertInputToPostfix(userInput);
        String[] arr = postfixForm.split(" ");
        Stack<Double> nums = new Stack<>();

        for(String str : arr) {
            if (str.trim().equals("")) {
                continue;
            }

            switch (str) {
                case "+":
                case "-":
                case "*":
                case "/":
                    double firstNum = nums.pop();
                    double secondNum = nums.pop();
                    double operationResult = 0;
                    switch(str) {
                        case "+":
                            operationResult = firstNum + secondNum;
                            break;
                        case "-":
                            operationResult = firstNum - secondNum;
                            break;
                        case "*":
                            operationResult = firstNum * secondNum;
                            break;
                        case "/":
                            operationResult = secondNum / firstNum;
                            break;
                        default:
                            break;
                    }
                    nums.push(operationResult);
                    break;
                default:
                    nums.push(Double.parseDouble(str));
                    break;
            }
        }
        return nums.pop();
    }

    public String convertInputToPostfix(String input){
        String result = "";

        Stack<Character> stack = new Stack<>();

        for (int i = 0; i<input.length(); ++i){
            char currentCharacter = input.charAt(i);

            if (Character.isLetterOrDigit(currentCharacter)) {
                result += currentCharacter;
                if(i+1<input.length() && isOperator(input.charAt(i+1))){
                    result += " ";
                }
            }else if (currentCharacter == '(')
                stack.push(currentCharacter);
            else if (currentCharacter == ')'){
                while (!stack.isEmpty() && stack.peek() != '(')
                    result += " " + stack.pop() + " ";

                stack.pop();
            }
            else {
                while (!stack.isEmpty() && getOrder(currentCharacter)<= getOrder(stack.peek())){
                    result += " " + stack.pop() + " ";
                }

                stack.push(currentCharacter);
            }

        }

        while (!stack.isEmpty()){
            result += stack.pop();
        }

        char lastOperator = result.charAt(result.length()-1);
        result = result.substring(0, result.length()-1);
        result += " ";
        result += lastOperator;
        return result;
    }

    int getOrder(char ch) {
        switch (ch)
        {
            case '+':
            case '-':
                return 1;

            case '*':
            case '/':
                return 2;

            case '^':
                return 3;
        }
        return -1;
    }

    private boolean isOperator(char c){
        return c == '+' || c == '-' || c == '*' || c == '/';
    }
}
