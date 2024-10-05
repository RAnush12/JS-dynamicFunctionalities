let showPassword = () =>{
    let box =document.querySelector('#pwd');

    let typeAttribute =box.getAttribute("type");

    if(typeAttribute==='text'){
        box.setAttribute("type","password")
    }else{
        box.setAttribute("type","text");
    }
}

//Check box
let checkbox = document.querySelector('#check');
checkbox.addEventListener("change",function(){
    showPassword();
});
