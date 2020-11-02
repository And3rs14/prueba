let uno = document.getElementById('1');

let body = document.getElementById('body');

let colors = document.querySelectorAll('.contenido');

let fontColor ;

for (let i = 0; i < colors.length; i++) {
        
    colors[i].addEventListener('mouseover', function() {
        fontColor = colors[i].style.backgroundColor;
        body.style.backgroundColor = fontColor;

        //console.log(fontColor);
    });
    colors[i].addEventListener('mouseout', function() {
        body.style.backgroundColor="white";
        //onsole.log("XAdiosX");
    });
}

