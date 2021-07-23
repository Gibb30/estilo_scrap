var intervalCarrousel = null;
var boxImg = -1;

window.onload = function () {
    iniciar();
}

function setImg() {
    var carrousel = document.getElementById('box1');
    switch (boxImg) {
        case 0:
        carrousel.innerHTML = '<img src="../images/PORTADA.jpg"/>';
            break;
        case 1:
            carrousel.innerHTML = '<img src="../images/portada2.jpg">'; 
            break;
        case 2:
            carrousel.innerHTML = '<img src="../images/66.jpg">'; 
            break;   
    } 
}

function cambiar() {
    if (boxImg == 2) {
        boxImg = 0;
    } else {
        boxImg += 1;
    } 
    setImg();
}

function iniciar() {
    intervalCarrousel = setInterval(cambiar, 5000);
}