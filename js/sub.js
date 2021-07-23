var intervaloCarrusel = null;
var boxImagen = -1;

window.onload = function () {
    iniciarCarrusel();
}

function setImage() {
    var carrusel = document.getElementById('box');
    switch (boxImagen) {
        case 0:
        carrusel.innerHTML = '<img src="../images/papel1.png">';
            break;
        case 1:
            carrusel.innerHTML = '<img src="../images/papel2.png">'; 
            break;
        case 2:
            carrusel.innerHTML = '<img src="../images/papel3.png">'; 
            break;   
    } 
}

function cambiarImagen() {
    if (boxImagen == 2) {
        boxImagen = 0;
    } else {
        boxImagen += 1;
    } 
    setImage();
}

function iniciarCarrusel() {
    intervaloCarrusel = setInterval(cambiarImagen, 5000);
}



