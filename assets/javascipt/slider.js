let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let img = document.getElementsByClassName("slides");
let imgActual = 0;
let isTrasition = false;

arrowLeft.addEventListener("click", () => {
    if(imgActual > 0 && isTrasition == false){
        imgActual--;
        isTrasition = true;
        trasition();
    }
});

arrowRight.addEventListener("click", () => {
    if(imgActual < img.length - 1 && isTrasition == false){
        imgActual++;
        isTrasition = true;
        trasition();
    }
});

function trasition(){
    let width = img[0].offsetWidth;

    img[0].style.marginLeft = -width*imgActual+'px';

    setTimeout(() => {
        isTrasition = false;
    }, 1500);
}