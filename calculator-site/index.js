
/*
 We have Four types of keys that can be rpessed
 - Number keys (10)
 - operator keys (4)
 - Clear Key (1)
 - Decimal Key (1)

 Therefore we should have four types of event listener functions

 The result for an entered expression starts at zero
 - Everytime an operator is hit, the display text should be converted to an integer or float
 - then the selected operation should be taken and result updated

 -Example:
    * The calculator sits in the default state with no information input by the user
    * User enters 100 as the first number and hits '+'
    * since the left operand is zero due to defauly state, set the rightOperand to the currentDisplayText
    * Figure out the last operator the user pressed
    * Perform that arithmetic and store it as the result and the new left operand
    * Display the result until the user enteres in the next numerical value 

*/





/*******************************************************************************************************/ 
/*      Global Values                                                                                  */
/*******************************************************************************************************/
// Calculator Data Storage
var calcData = {
    leftOperand: 0,
    rightOperand: 0,
    result: 0,
    currentDisplayText: document.querySelector("#grid-screen > p").textContent,
    decimalFlag: false,
    operatorFlag: false,
    lastOperatorPressed: null
}





/*******************************************************************************************************/ 
/*      Calculator Setup                                                                               */
/*******************************************************************************************************/
// Set event listeners on the number elements of the keypad
var keyCount = document.querySelectorAll(".number").length;

for (var index = 0; index < keyCount; index++)
{
    document.querySelectorAll(".number")[index].addEventListener("click", numberPressed);
}

//set event listeners on the operator elements of the keypad
keyCount = document.querySelectorAll(".operator").length;

for (var index = 0; index < keyCount; index++)
{
    document.querySelectorAll(".operator")[index].addEventListener("click", operatorPressed);
}

//set event listener on the clear key
document.querySelector(".clear").addEventListener("click", clearPressed);

//set event listener on the enter key
document.querySelector(".enter").addEventListener("click", enterPressed);

//set event listener on the decimal key
document.querySelector(".decimal").addEventListener("click", decimalPressed);





/*******************************************************************************************************/ 
/*      Function                                                                                       */
/*******************************************************************************************************/
//Handle a number key being pressed
function numberPressed()
{
    console.log("Number key has been pressed");         //DEBUG: log the key was pressed
    //append the number pressed to currentDisplayText
    var keyPressed = this.textContent;
    console.log(keyPressed);                            //DEBUG
    console.log(typeof(keyPressed));                    //DEBUG
    if (calcData.currentDisplayText === "0")
    {
        calcData.currentDisplayText = "";
    }
    calcData.currentDisplayText = calcData.currentDisplayText + keyPressed;
    console.log(calcData.currentDisplayText);           //DEBUG
    //set currentDisplayText to the calculator screen
    document.querySelector("#grid-screen > p").textContent = calcData.currentDisplayText;
}





//Handle the clear key being pressed
function clearPressed()
{
    console.log("Clear key has been pressed");          //DEBUG: log the key was pressed
    //reset the calculator data storage and display screen to default:
    calcData.leftOperand = 0;
    calcData.rightOperand = 0;
    calcData.result = 0;
    calcData.currentDisplayText = "0";
    document.querySelector("#grid-screen > p").textContent = "0";
    calcData.decimalFlag = false;
    calcData.operatorFlag = false;

}





// Handle the decimal key being pressed
function decimalPressed()
{
    console.log("Decimal Key Has been pressed")         //DEBUG: log the key was pressed

    //check if its been pressed already for this operand
    if (calcData.decimalFlag === false)
    {
        //only one decimal can be in a number so set the decimalFlag to true
        calcData.decimalFlag = true;
        //append the decimal to the end of the currentDisplayText
        var keyPressed = this.textContent;
        console.log(keyPressed);                            //DEBUG
        console.log(typeof(keyPressed));                    //DEBUG
        calcData.currentDisplayText = calcData.currentDisplayText + keyPressed;
        console.log(calcData.currentDisplayText);           //DEBUG
        //update the screen of the calculator on the website
        document.querySelector("#grid-screen > p").textContent = calcData.currentDisplayText;
    }
    else  console.log("Decimal already added to operand");  //DEBUG
    
}





//Handle an operator key being pressed
function operatorPressed()
{
    console.log("Operator key has been pressed");       //DEBUG: log the key was pressed
    var keyPressed = this.textContent;
    calcData.lastOperatorPressed = this.textContent;

    //perform operation
    if (calcData.operatorFlag === false)
    {
        calcData.leftOperand = parseInt(calcData.currentDisplayText, 10);
        calcData.operatorFlag = true;
    }
    else if (calcData.operatorFlag === true)
    {
        completeOperation(keyPressed);
    }


    console.log("Result: " + calcData.result); //DEBUG
    
    //setFlag
    calcData.operatorFlag = true;
    
    //reset the display
    calcData.currentDisplayText = "0";
    document.querySelector("#grid-screen > p").textContent = calcData.result;
   

    

}





//Handle the enter key being pressed
function enterPressed()
{
    console.log("Enter key has been pressed");          //DEBUG: log the key was pressed
    completeOperation(calcData.lastOperatorPressed);
    console.log("result: " + calcData.result);
    //setFlag
    calcData.operatorFlag = true;

    //reset the display
    calcData.currentDisplayText = "0";
    document.querySelector("#grid-screen > p").textContent = calcData.result;
}





function completeOperation(keyPressed)
{
    switch (keyPressed) 
        {
            case '+':
                calcData.rightOperand = parseInt(calcData.currentDisplayText, 10);
                console.log("Numbers: " + calcData.leftOperand + "+" + calcData.rightOperand);   //DEBUG
                console.log("types: " + typeof(calcData.leftOperand) + "+" + typeof(calcData.rightOperand));   //DEBUG
                calcData.result = calcData.leftOperand + calcData.rightOperand;
                calcData.leftOperand = calcData.result;
                break;
            case '-':
                console.log("Left Operand: " + calcData.leftOperand);
                calcData.rightOperand = parseInt(calcData.currentDisplayText, 10);
                console.log("Numbers: " + calcData.leftOperand + "-" + calcData.rightOperand);   //DEBUG
                console.log("types: " + typeof(calcData.leftOperand) + "-" + typeof(calcData.rightOperand));   //DEBUG
                calcData.result = calcData.leftOperand - calcData.rightOperand;
                calcData.leftOperand = calcData.result;
                break;
            case '*':
                calcData.rightOperand = parseInt(calcData.currentDisplayText, 10);
                calcData.result = calcData.leftOperand * calcData.rightOperand;
                calcData.leftOperand = calcData.result;
                break;
            case '/':
                calcData.rightOperand = parseInt(calcData.currentDisplayText, 10);
                calcData.result = calcData.leftOperand / calcData.rightOperand;
                calcData.leftOperand = calcData.result;
                break;
            default:
                break;
        }
}