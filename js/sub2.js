var intervalCarrousel = null;
var boxImg = -1;

window.onload = function () {
    iniciar();
}

function setImg() {
    var carrousel = document.getElementById('box3');
    switch (boxImg) {
        case 0:
        carrousel.innerHTML = '<img src="../images/rain1.png"/>';
            break;
        case 1:
            carrousel.innerHTML = '<img src="../images/rain2.png">'; 
            break; 
        case 2:
            carrousel.innerHTML = '<img src="../images/rain3.png">'; 
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