let movieReview = () =>{
    let spanTag = document.querySelector('#char');
    spanTag.innerHTML=50-textAreaBox.value.length;
}

//textarea box

let textAreaBox=document.querySelector('#box-1');
textAreaBox.addEventListener("keypress",function(){
    movieReview();
});