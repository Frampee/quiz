



let opciones = document.querySelectorAll("#lopez-doriga, #fernandez-sanchez, #gonzalez-antona, #bermudez-quiroga");

for (let x = 0; x <= opciones.length; x++) {

    opciones[x].addEventListener("click", function(){

        if (opciones[x].value === true){
            console.log("aquí");
        }

        else {false};

    }

    )
    
}

console.log(opciones);






