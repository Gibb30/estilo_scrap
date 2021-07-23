var intervalCarrousel = null;
var boxImg = -1;

window.onload = function () {
    iniciar();
}

function setImg() {
    var carrousel = document.getElementById('box2');
    switch (boxImg) {
        case 0:
        carrousel.innerHTML = '<img src="../images/5.png"/>';
            break;
        case 1:
            carrousel.innerHTML = '<img src="../images/matte1.png">'; 
            break;   
    } 
}

function cambiar() {
    if (boxImg == 1) {
        boxImg = 0;
    } else {
        boxImg += 1;
    } 
    setImg();
}

function iniciar() {
    intervalCarrousel = setInterval(cambiar, 5000);
}