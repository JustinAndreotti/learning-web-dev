//Global Values

//flags
var decimalPressed = false;
var operatorPressed = false;

//data storage
var currOperator = '';
var currExpression = "0";
var leftOperand = "";
var rightOperand = "";
var storedResult = 0;
var tempLeft = 0;
var tempRight = 0;

//constants
const operators = ['+', '-', '*', '/'];


keyCount = document.querySelectorAll(".key").length;

for (var index = 0; index < keyCount; index++)
{
    document.querySelectorAll(".key")[index].addEventListener("click", handleKeypress)
}





function handleKeypress()
{
    console.log("key: N/A" + ", has been pressed");
    
    //figure out what key is pressed
    var keyTextContent = this.textContent;

    //Perform the appropraite operation dependant onkeypress
    if (keyTextContent === "C")     //Clear current screen
    {
        document.querySelector("#grid-screen > p").textContent = "0";           // Reset text display
        operatorPressed = false;                                                // clear flags
        decimalPressed = false;
        currExpression = "0";                                                   //reset data storage
        leftOperand = "0"
    }
    else if (keyTextContent === "E")    
    {
        //do nothing as of right now
        decimalpressed = false;
    }
    else if (keyTextContent === "'.'")
    {
        if (decimalPressed = false)
        {
            document.querySelector("#grid-screen > p").textContent = currExpression + keyTextContent;
            
            //store the current string on the screen
            currExpression = document.querySelector("#grid-screen > p").textContent;
        }
        else;
    }
    else if (operators.includes(keyTextContent))
    {
        switch (keyTextContent) {
            case '+':
                if (operatorPressed === true)
                {
                    
                    //set current expression to right operand
                    rightOperand = document.querySelector("#grid-screen > p").textContent;
                    //convert left and right operand to integers
                    if (decimalPressed = true)
                    {
                        tempLeft = parseFloat(leftOperand);
                        tempRight = parseFloat(rightOperand);
                    }
                    else
                    {
                        tempLeft = parseInt(rightOperand, 10);
                        tempRight = parseInt(leftOperand, 10);
                    }
                    //do math and store result
                    storedResult = tempLeft + tempRight;
                    //reset the screen to empty
                    document.querySelector("#grid-screen > p").textContent = "";
                    currExpression = "";
                    // set DecimalPreseed flag to false
                    decimalPressed = false; 
                }else handleOperatorPressed(keyTextContent);
                break;
            case '-':
                if (operatorPressed === true)
                    {
    
                    }else handleOperatorPressed(keyTextContent);
                break; 
            case '*':
                if (operatorPressed === true)
                    {
    
                    }else handleOperatorPressed(keyTextContent);
                break; 
            case '/':
                if (operatorPressed === true)
                    {
    
                    }else handleOperatorPressed(keyTextContent);
                break;  
            default:
                break;
        }
    }
    else  //append the pressed key to the end of the expression
    {
        if (currExpression === "0")
        {
            currExpression = "";
        }
        document.querySelector("#grid-screen > p").textContent = currExpression + keyTextContent;
        //store the current string on the screen
        currExpression = document.querySelector("#grid-screen > p").textContent;
    }
}





function handleOperatorPressed(operator)
{
    leftOperand = document.querySelector("#grid-screen > p").textContent;           //store the current string on the screen
    operatorPressed = true;                                                         //set flag
    currOperator = operator;                                                        //store operator
    currExpression = "0";                                                           //reset curr expression
    document.querySelector("#grid-screen > p").textContent = "";                    //reset display
}