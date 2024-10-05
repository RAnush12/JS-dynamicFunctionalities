let showDynamicText = () =>{
    let pTag = document.querySelector("#message");
    pTag.innerHTML = textBox.value;
}

//textBox
let textBox=document.querySelector("#box-1");
textBox.addEventListener("keyup",function(){
    showDynamicText();
});