//Global Values
var decimalPressed = "false";
var operatorPressed = "false";


keyCount = document.querySelectorAll(".key").length;

for (var index = 0; index < keyCount; index++)
{
    document.querySelectorAll(".key")[index].addEventListener("click", function(){
        console.log("a key has been pressed");
        
        //figure out what key is pressed
        var keyTextContent = this.textContent;

        //store the current string on the screen
        var currExpression = document.querySelector("#grid-screen > p").textContent;

        //append the pressed key to the expression
        if (keyTextContent === "C")     //Clear current screen
        {
            document.querySelector("#grid-screen > p").textContent = "0";
        }
        else if (keyTextContent === "E")    
        {
            //do nothing as of right now
        }
        else if (currExpression === "0")    //Clear the zero when inputting first number
        {
            currExpression = "";
            document.querySelector("#grid-screen > p").textContent = currExpression + keyTextContent;
        }
        else 
        {
            document.querySelector("#grid-screen > p").textContent = currExpression + keyTextContent;
        }
        
    })
}
