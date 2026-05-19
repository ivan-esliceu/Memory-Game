casillas = ["1","2","3","4","5","6","7","8"]

//Función para aleatorizar el orden de las casillas


//Función para clicks

//funcion 
// for (let i = 0; i < casillas.length; i++) {
//     let casilla = document.getElementById(casillas[i]);
//     casilla.addEventListener("click", function() {
//         casilla.textContent = "o";
//     });
// }
lista_palabras= ["perro","gato","casa","arbol"]

function distribucionaleatoriaacoordenadas(lista) {
    lista_duplicada = lista.concat(lista);
    lista_nueva= [];
    for (let i = 0; i < casillas.length; i++) {
        let elementoRandom = lista_duplicada[Math.floor(Math.random() * lista_duplicada.length)]
        lista_nueva.push(elementoRandom);
        
        lista_duplicada.splice(lista_duplicada.indexOf(elementoRandom), 1);

        
}
    return lista_nueva;
}

function sacarcoordendadasultimosdosclicks(){
    ultimosdosclicks = [];
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);
        casilla.addEventListener("click", function() {
            
            ultimosdosclicks.push(i+1);
                if (ultimosdosclicks.length > 2) {
                    ultimosdosclicks.shift();
                }
            
        })


}
}

sacarcoordendadasultimosdosclicks();
function parejasposibles(lista){
    lista_parejas = [];
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j]) {
                lista_parejas.push([i+1, j+1]);
            }
        }
    }
    return lista_parejas;
}

console.log(parejasposibles(distribucionaleatoriaacoordenadas(lista_palabras)));

function revertirpareja(pareja){
    return [pareja[1], pareja[0]];
}

function todasparejas(lista){
    lista_total_parejas = [];
    for (let i = 0; i < lista.length; i++) {
        lista_total_parejas.push([revertirpareja(lista[i]), lista[i]]);
    }
    return lista_total_parejas;
}   

parejas = parejasposibles(distribucionaleatoriaacoordenadas(lista_palabras));
console.log(todasparejas(parejas));


function verificarpareja(ultimosdosclicks, todasparejas) {
    for (let i = 0; i < todasparejas.length; i++) {
        if ((ultimosdosclicks[0] === todasparejas[i][0][0] && ultimosdosclicks[1] === todasparejas[i][0][1]) || (ultimosdosclicks[0] === todasparejas[i][1][0] && ultimosdosclicks[1] === todasparejas[i][1][1])) {
            return true;
        }
    }    return false;
}

function mostrarquehaydebajocasillla(ultimosdosclicks, lista) {
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);
        casilla.addEventListener("click", function() {
          casilla.textContent = lista[i];
     });
     }  
}
mostrarquehaydebajocasillla(ultimosdosclicks, distribucionaleatoriaacoordenadas(lista_palabras));
function Main() {
    let ultimosdosclicks = [];
    let parejas = todasparejas(parejasposibles(distribucionaleatoriaacoordenadas(lista_palabras))); 
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);     
        casilla.addEventListener("click", function() {
            ultimosdosclicks.push(i+1);
            if (ultimosdosclicks.length > 2) {
                ultimosdosclicks.shift();
                if (verificarpareja(ultimosdosclicks, parejas)) {
                    alert("¡Pareja encontrada!");
                } else {
                    alert("No es una pareja.");
                    for (let j = 0; j < ultimosdosclicks.length; j++) {
                        let casilla = document.getElementById(casillas[ultimosdosclicks[j] - 1]);
                        casilla.textContent = "a";
                    }
                }
            }, 1000);
        });
    }      
}

Main();