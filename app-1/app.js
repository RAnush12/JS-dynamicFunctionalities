let textBox = document.querySelector("#display");
let printMessage = (message,bgcolor) =>{
    if(message!==''){
        textBox.style.backgroundColor =bgcolor;
        textBox.style.color = "white";
        textBox.style.fontSize = "25px";
        textBox.style.fontWeight = "bold";
        textBox.value = message;
    }else{
        textBox.style.backgroundColor =bgcolor;
        textBox.style.fontSize = "16px";
        textBox.style.fontWeight = "normal";
        textBox.value = message;
    }
} 

//Red Button
let redButton = document.querySelector("#rb");
redButton.addEventListener("click",function(){
    printMessage('You have clicked red button','red');
});

//clear Button
let clearButton = document.querySelector("#cb");
clearButton.addEventListener("click",function(){
    printMessage('','white');
});

//Blue Button
let blueButton = document.querySelector("#bb");
blueButton.addEventListener("click",function(){
    printMessage('You have clicked blue button','blue');
});

//Yellow Button
let yellowButton = document.querySelector("#yb");
yellowButton.addEventListener("click",function(){
    printMessage('You have clicked Yellow button','yellow');
});