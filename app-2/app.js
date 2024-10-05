let num1 = document.querySelector('#box-1');
let num2 = document.querySelector('#box-2');
let resultBox = document.querySelector('#box-3');

let calculate = operator => {
    
    if(operator==='+'){
        resultBox.value = Number(num1.value) + Number(num2.value);
    }
    else if(operator==='-'){
        resultBox.value = Number(num1.value) - Number(num2.value);
    }
    else if(operator==='*'){
        resultBox.value = Number(num1.value) * Number(num2.value);
    }
    else if(operator==='/'){
        resultBox.value = Number(num1.value) / Number(num2.value);
    }
    else{
        num1.value='';
        num2.value='';
        resultBox.value='';
    }
}
//Add button
let addButton = document.querySelector('#add');
addButton.addEventListener("click",function(){
    calculate('+');
});

//Subtract button
let subtractButton = document.querySelector('#sub');
subtractButton.addEventListener("click",function(){
    calculate('-');
});

//Multiply button
let mulButton = document.querySelector('#mul');
mulButton.addEventListener("click",function(){
    calculate('*');
});

//Divide button
let divButton = document.querySelector('#div');
divButton.addEventListener("click",function(){
    calculate('/');
});

//Clear button
let clearButton = document.querySelector('#del');
clearButton.addEventListener("click",function(){
    calculate(' ');
});