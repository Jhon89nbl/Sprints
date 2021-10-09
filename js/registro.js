let registros = [];
/***Arreglo de objetos y crear registro Johan Sebastian Harrison */

function agregarRegistro(){

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    let usuario = {
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        contrasena: contrasena
    };
    registros.push(usuario);

    
}

/***Ordenar el contenido por el nombre y filtro de registro por correo gmail.com Jhon y Jorge */

function ordenarArreglo(arreglo){
    registros.sort((a,b) =>{
        if(a.nombre > b.nombre) return 1;
        if(a.nombre < b.nombre) return -1;
        
        return 0;
    });
    console.log(registros);
    return registros;
}

function filtrarCorreo(arreglo){
    let temp= []
    registros.forEach(element => {
        if(element.correo.indexOf("@gmail.com")> -1){
            temp.push(element);
        }
    });
    return temp;
}

module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;