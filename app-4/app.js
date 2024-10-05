let showCityDetails = () =>{
    let textBox = document.querySelector('#display');
    if(cityBox.value==="none"){
        textBox.value='';
        textBox.style.fontsize='16px';
        textBox.style.fontWeight='normal';
    }else{
        textBox.value=" You have selected " + cityBox.value;
        textBox.style.color="blue";
        textBox.style.fontsize='25px';
        textBox.style.fontWeight='bold';
    }
}

//drop down menu
let cityBox = document.querySelector("#city");
cityBox.addEventListener("change",function(){
    showCityDetails();
});