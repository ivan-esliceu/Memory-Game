casillas = ["1","2","3","4","5","6","7","8"]



//Función para clicks

//funcion 
// for (let i = 0; i < casillas.length; i++) {
//     let casilla = document.getElementById(casillas[i]);
//     casilla.addEventListener("click", function() {
//         casilla.textContent = "o";
//     });
// }
lista_palabras= ["perro","gato","casa","arbol"]




// Funció per distribuir aleatoriament les coordenades de les paraules
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

// Funció obsoleta ja que utilitzant un click listener no es pot fer externament
function sacarcoordendadasultimosdosclicks(){
    ultimosdosclicks = ["hola"];
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);
        casilla.addEventListener("click", function() {
            
            ultimosdosclicks.push(i+1);
                if (ultimosdosclicks.length > 2) {
                    ultimosdosclicks.shift();
                }
          
                
        })
    return ultimosdosclicks;            


}
}

sacarcoordendadasultimosdosclicks();
//Funció per determinar parelles possibles
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

//Funció per revertir una parella
function revertirpareja(pareja){
    return [pareja[1], pareja[0]];
}





//Funció per mostrar que hi ha davall una casella
function mostrarquehaydebajocasillla(ultimosdosclicks, lista) {
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);
        casilla.addEventListener("click", function() {
          casilla.textContent = lista[i];
     });
     
     }  
}




  


// Funcion per carregar el programa. Es important recalcar que es frustant ja que pots fer moltes proves individuals
// amb funcions pero al final, el click listener s'ubica al Main i tot gira entorn aixó.
function Main() {
    ultimosdosclicks = [];
    distribucion = distribucionaleatoriaacoordenadas(lista_palabras);
    console.log(distribucion);
    parejas = parejasposibles(distribucion);
       mostrarquehaydebajocasillla(ultimosdosclicks, distribucion);
        
    let parejasDescubiertas = [];
    
    for (let i = 0; i < casillas.length; i++) {
        let casilla = document.getElementById(casillas[i]);     
            
        casilla.addEventListener("click", function() {
                
            if (parejasDescubiertas.includes(i + 1)) {
                return;
            }
    
            if (ultimosdosclicks.length === 1 && ultimosdosclicks[0] === (i + 1)) {
                return;
            }
    
            ultimosdosclicks.push(i + 1);
                
            if (ultimosdosclicks.length > 2) {
                ultimosdosclicks.shift();
            }      
                
            if (ultimosdosclicks.length < 2) {
                return;
            }
    
            let acierto = false;
    
            for (let u = 0; u < parejas.length; u++) {
                if ((parejas[u][0] == ultimosdosclicks[0] && parejas[u][1] == ultimosdosclicks[1]) || 
                    (parejas[u][0] == ultimosdosclicks[1] && parejas[u][1] == ultimosdosclicks[0])) {
                        
                    console.log("hihi funciona");
                    acierto = true;
                        
                    parejasDescubiertas.push(ultimosdosclicks[0]);
                    parejasDescubiertas.push(ultimosdosclicks[1]);
                        
                    document.getElementById(ultimosdosclicks[0]).classList.add("acertada");
                    document.getElementById(ultimosdosclicks[1]).classList.add("acertada");
                        
                    break;
                    }
                }
    
            if (acierto === false) {
                let casilla1 = document.getElementById(ultimosdosclicks[0]);
                let casilla2 = document.getElementById(ultimosdosclicks[1]);
    
                setTimeout(function() {
                    casilla1.textContent = "X";
                    casilla2.textContent = "X";
                    }, 750);
                }
    
            if (parejasDescubiertas.length === casillas.length) {
                    document.getElementById("message").textContent = "¡Has ganado!";
                }
    
            ultimosdosclicks = [];
            });
        }    
    }



Main();
