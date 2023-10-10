

//1 Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const todo = document.querySelector('body');
todo.addEventListener('click', function(event) {
  event.preventDefault();
});


//2 Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 6);
    let nombreArchivoGIF = `./assets/magic-${numeroAleatorio}.gif`;
    images[i].removeEventListener('click', cambiarImagen);
    images[i].addEventListener('click', cambiarImagen);
    function cambiarImagen() {
        images[i].src = nombreArchivoGIF;
    } 
}

console.log(document.querySelectorAll('p'));

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const parrafos = document.getElementsByTagName('p');

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].removeEventListener('click', cambiarColor);
    parrafos[i].addEventListener('click', cambiarColor);
    function cambiarColor() {
        parrafos[i].style.color = colorAleatorio(colores);
        parrafos[i].style.backgroundColor = colorAleatorio(colores);
    } 
}


//2.3 Bloques de article o section: Cambia el color de fondo.
const articulos = document.getElementsByTagName('article');
const secciones = document.getElementsByTagName('section');
for (let i = 0; i < articulos.length; i++) {
    articulos[i].removeEventListener('click', cambiarColor);
    articulos[i].addEventListener('click', cambiarColor);
    function cambiarColor() {
        articulos[i].style.color = colorAleatorio(colores);
    }
}
for (let i = 0; i < secciones.length; i++) {
    secciones[i].removeEventListener('click', cambiarColor);
    secciones[i].addEventListener('click', cambiarColor);
    function cambiarColor() {
        secciones[i].style.backgroundColor = colorAleatorio(colores);
    }
}

//3 Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

for (let i = 0; i < images.length; i++) {
    let imagenActual = images[i].src;
    images[i].addEventListener('mouseover', cambioAbracadabra);
    function cambioAbracadabra(){
        images[i].src= "./assets/abracadabra.gif";
    }
    images[i].addEventListener('mouseout', volverOriginal);
    function volverOriginal(){
        images[i].src= imagenActual;
}
}


//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < parrafos.length; i++) {
    let colorTextActual = parrafos[i].style.color;
    let colorFondoActual = parrafos[i].style.backgroundColor;
    parrafos[i].addEventListener('mouseover', cambioColorText);
    function cambioColorText(){
        parrafos[i].style.color= colorAleatorio(colores);
        parrafos[i].style.backgroundColor= colorAleatorio(colores);
    }
    parrafos[i].addEventListener('mouseout', volverOriginal);
    function volverOriginal(){
        parrafos[i].style.color= colorTextActual;
        parrafos[i].style.backgroundColor= colorFondoActual;
}
}


//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i = 0; i < articulos.length; i++) {
    let colorActualArt = articulos[i].style.backgroundColor;
    let colorActualSec = secciones[i].style.backgroundColor;
    articulos[i].addEventListener('mouseover', cambiarColor);
    function cambiarColor() {
        articulos[i].style.backgroundColor = colorAleatorio(colores);
    }
    articulos[i].addEventListener('mouseout', cambiarColor);
    function cambiarColor() {
        articulos[i].style.backgroundColor = colorActualArt;
}
for (let i = 0; i < secciones.length; i++) {
    secciones[i].addEventListener('mouseover', cambiarColor);
    function cambiarColor() {
        secciones[i].style.backgroundColor = colorAleatorio(colores);
    }
    secciones[i].addEventListener('mouseout', cambiarColor);
    function cambiarColor() {
        secciones[i].style.backgroundColor = colorActualSec;
}
}
}

const colores=["red", "blue", "yellow", "grey", "black", "orange", "pink", "purple", "green"];
function colorAleatorio (arrColores){
    const numAleatori = Math.floor(Math.random()*9);
    return arrColores[numAleatori];
}