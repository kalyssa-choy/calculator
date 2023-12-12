const clearButton = document.getElementById("clear");
const buttons = document.getElementById("buttons");
const display = document.getElementById("input");

//all of the buttons in the buttons div
const buttonList = buttons.querySelectorAll(".button");
// console.log("run?");

var firstNum = 0;
var secondNum = 0;
var oppy = "";
function handleClick(event){
    var clicked = event.target;

    if(!isNaN(clicked.innerText)){
        if(display.innerText === "0"){
            display.innerText = clicked.innerText;
        }
        else{
            display.innerText += clicked.innerText;
        }
        
    }
    else if(isNaN(clicked.innerText) && clicked.innerText != "=" && clicked.innerText != "."){
        firstNum = parseFloat(display.innerText);
        display.innerText = 0;
        oppy = clicked.innerText;
        console.log(oppy);
    }
    else if(clicked.innerText === "."){
        display.innerText += clicked.innerText;
    }
    else{
        secondNum = parseFloat(display.innerText);
        if(oppy === "/"){
            if(secondNum === 0 || isNaN(secondNum)){
                display.innerText = "ERROR";
            }
            else{
                display.innerText = firstNum/secondNum;
            }      
        }
        else if(oppy === "*"){
            display.innerText = firstNum*secondNum;
        }
        else if(oppy === "-"){
            console.log("not adding");
            display.innerText = firstNum - secondNum;
        }
        else if(oppy === "+"){
            console.log(oppy);
            display.innerText = firstNum + secondNum;
        }
    }
}



function clear(){
    display.innerText = "";
}

for(let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", handleClick)
}
clearButton.addEventListener("click", clear);