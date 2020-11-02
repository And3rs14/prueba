
let nombre = document.getElementById('nombre');
let cambio = document.getElementById('cambiar');


cambio.addEventListener('input', onlynumb);
nombre.addEventListener('input', onlyletters);

function onlynumb(){
    num = cambio.value;
    let b = [];
    for (let i = 0; i < num.length; i++) {
        let a = num.charAt(i)
        if (isFinite(a)) {
            b += num.charAt(i);
        }
    } 
    cambio.value = b;
    let message = cambio.value
    return message
}
function onlyletters(){
    nomb = nombre.value;
    let b = [];
    for (let i = 0; i < nomb.length; i++) {
        let a = nomb.charAt(i)
        if (!isFinite(a)) {
            b += nomb.charAt(i);
        }
    } 
    nombre.value = b;
    let message = nombre.value
    return message
}


