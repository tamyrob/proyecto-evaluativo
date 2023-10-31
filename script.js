let foto = document.getElementById("foto")
let botonAlejar = document.getElementById("btn-alejar")
let botonAmpliar = document.getElementById("btn-ampliar")
let textoZoom = document.getElementById("valor-zoom")

let imagenes = ["brazotristeza.jpeg", "fotocondor.jpeg"]
let indice = 0

function cambiarImagen() {
    let src = foto.src

    if (indice === (imagenes.length - 1)) {
        indice = 0
    } else {
        indice++
    }

    foto.src = imagenes[indice]
}

foto.addEventListener("click", cambiarImagen)
 
let valorZoom = 100

function alejarImagen() {
    if (valorZoom === 0) {
        return
    }
    valorZoom--
    textoZoom.innerText = valorZoom
    foto.style.width = 400 * (valorZoom / 100) + "px"
}

function ampliarImagen() {
    valorZoom++
    textoZoom.innerText = valorZoom
    foto.style.width = 400 * (valorZoom / 100) + "px"
}

botonAlejar.addEventListener("click", alejarImagen)
botonAmpliar.addEventListener("click", ampliarImagen)
