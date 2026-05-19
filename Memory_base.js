casillas = ["1","2","3","4","5","6","7","8"]

//Función para aleatorizar el orden de las casillas


//Función para clicks

//funcion 
for (let i = 0; i < casillas.length; i++) {
    let casilla = document.getElementById(casillas[i]);
    casilla.addEventListener("click", function() {
        casilla.textContent = "o";
    });
}
lista_palabras= ["perro","gato","casa","arbol"]

function distribucionaleatoria(lista) {
    lista_duplicada = lista.concat(lista);
 
    for (let i = 0; i < casillas.length; i++) {
        let elementoRandom = lista_duplicada[Math.floor(Math.random() * lista_duplicada.length)]
        let casilla = document.getElementById(casillas[i]);
        casilla.textContent = elementoRandom;
        lista_duplicada.splice(lista_duplicada.indexOf(elementoRandom), 1);

        console.log(lista_duplicada);
}

}
distribucionaleatoria(lista_palabras);
