//console.log("funciona")

let secreto = Math.floor(Math.random()*100)+1
console.log(secreto)

let acierto = false 
let contador = 0
const inputNumero = document.querySelector("#inputNumero")
const botonComprobar = document.querySelector("#botonComprobar")
const pIntentos = document.querySelector("#pIntentos")
const pMensaje = document.querySelector("#pMensaje")

inputNumero.focus()//Esto pone el foco en el INPUT texto.
function creaBoton(){
const botonReset = document.createElement("input")
botonReset.type="button"
botonReset.value="Volver a jugar"
botonReset.onclick = function(){
    secreto = Math.floor(Math.random()*100)+1 //nuevo valor random
    contador = 0
    pIntentos.textContent = "Números ya intentados"
    inputNumero.disabled=false
    botonComprobar.disabled=false
    //document.body.removeChild(this)
    this.remove()
}
document.body.append(botonReset)
}


function comprobarNumero(){
    if(isNaN(inputNumero.value)) pMensaje.textContent="No es un numero!! Es que eres subnormal???"
    if (inputNumero.value > 0 ) {
        pIntentos.textContent += inputNumero.value + " "
        contador++
        if (secreto == inputNumero.value){
            pMensaje.textContent="Enhorabuena, has acertado"
            acierto=true 
            creaBoton()
        }
             if (secreto > inputNumero.value) pMensaje.textContent="No es correcto, el número es mayor"
             if (secreto < inputNumero.value) pMensaje.textContent="No es correcto, el número es menor"
            
        inputNumero.value=" "
        
        if (contador == 6 && acierto==false){
            //terminar partida
            inputNumero.disabled = true
            botonComprobar.disabled = true
            //hacer aparecer un nuevo boton de "Volver a jugar"
           creaBoton()
    
            }
            
        }
}


    inputNumero.addEventListener(
        "keyup",
        function(objInfoEvento){
            //console.log("Tecla pulsada (which): " +objInfoEvento.which)
            //which & keyCode estan en desuso - Usar en su lugar la de abajo:
            if(objInfoEvento.key=="Enter") //El usuario ha pulsado Enter
            comprobarNumero()
        }
    )


botonComprobar.addEventListener(
    "click", 
comprobarNumero

)

//console.log(inputNumero.value)