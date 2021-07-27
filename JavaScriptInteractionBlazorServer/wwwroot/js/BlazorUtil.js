class BlazorUtil
{
    calculator = new Calculator();
}

class Calculator
{
    minus(leftHand, rightHand)
    {
        return leftHand - rightHand;
    }
}

window.BlazorUtil = new BlazorUtil();