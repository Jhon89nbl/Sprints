// funcion macro que agrupe las funciones de registro
// la funcion macro seria la que se coloque en el onclick registro(para buenas practicas)
// no requerido por el bot






function checkTelefono(valor){

    var valor = document.getElementById("telefono").value;
    if(valor == null || valor.length == 0){
        alert("El campo de telefono no puede quedar vacio");
        return;
    }
}


module.export = checkTelefono;

