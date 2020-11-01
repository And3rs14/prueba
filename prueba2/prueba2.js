/* let cambio = document.getElementById('cambiar').value;
let actualizar = document.getElementById('actualizar');
cambio.addEventListener('input', numb);

function numb(e) {
    e = cambio.value;
    actualizar.textContent = e;
    
} */
/* Escribir solo números en un input tipo text */
let nombre = document.getElementById('nombre');

let cambio = document.getElementById('cambiar');
let actualizar = document.getElementById('actualizar');

cambio.addEventListener('input', onlynumb);

function numb() {
    num = cambio.value;
    nom = nombre.value;
    actualizar.textContent = "HOLA "+ nom +" usted escribió "+num;
    let message = actualizar.textContent
    console.log(num.length);
    return message
}
function onlynumb(){
    num = cambio.value;
    for (let i = 0; i < num.length; i++) {
        let a = num.charAt(i)
        
        if (!isFinite(a)) {

            num.charAt(i) = "";
            
        }
        /* i = i - 1; */
    } 
    
    
    actualizar.textContent = num;
    let message = actualizar.textContent
    return message
}