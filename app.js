let numeroSecreto = 0;
let contador = 0;
let lista = [];
let numeroMaximo = 10;
let limitador = 3;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en un total ${contador} ${(contador==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        limpiar();
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Tu número es más grande que el numero secreto');
        }
        else{
            asignarTextoElemento('p', 'Tu número es más pequeño que el numero secreto');
        }
        contador++;
    }
}

function limpiar(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    /*if(lista.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return -1; // Retorna -1 si ya se han sorteado todos los números
    }*/
   if(lista.length == limitador){
        asignarTextoElemento('p', `Ya se acabaron los ${limitador} intentos disponibles`);
        return -1; 
   }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while(lista.includes(numeroGenerado));
    
    lista.push(numeroGenerado);
    return numeroGenerado;
}

function condicionInicial(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `¡Hola! Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
}

function reiniciarJuego() {
    limpiar();
    condicionInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Inicializa el juego y los event listeners
condicionInicial();
