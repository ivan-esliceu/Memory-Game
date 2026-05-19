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

function distribucionaleatoriaacoordenadas(lista) {
    lista_duplicada = lista.concat(lista);
    lista_nueva= [];
    for (let i = 0; i < casillas.length; i++) {
        let elementoRandom = lista_duplicada[Math.floor(Math.random() * lista_duplicada.length)]
        lista_nueva.push(elementoRandom);
        console.log("ESTA NIGGA"+lista_nueva);
        lista_duplicada.splice(lista_duplicada.indexOf(elementoRandom), 1);

        console.log(lista_duplicada);
}
    return lista_nueva;
}
distribucionaleatoriaacoordenadas(lista_palabras);

function sacarcoordendadasultimosdosclicks(){
    ultimosdosclicks = [];
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);
        casilla.addEventListener("click", function() {
            casilla.textContent = "o";
            console.log(i+1)
            ultimosdosclicks.push(i+1);
                if (ultimosdosclicks.length > 2) {
                    ultimosdosclicks.shift();
                }
            console.log(ultimosdosclicks);
        })


}
}

sacarcoordendadasultimosdosclicks();
function parejasposibles(){

}

function revertirpareja(pareja){
    return [pareja[1], pareja[0]];
}