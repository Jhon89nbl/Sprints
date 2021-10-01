// funcion macro que agrupe las funciones de registro
// la funcion macro seria la que se coloque en el onclick registro(para buenas practicas)
// no requerido para el bot





module.exports = checkNombre;
checkNombre(valor)
//Jorge -------

function checkNombre(valor) {

    
    if (valor.length>=4 && valor.length<=30){
        if (valor.length!= 0 && typeof(valor)=='string'){
            return true
       }
    }
    
    return false;
    
    


}

/*2. Validar que campo género se encuentre seleccionado, es decir, el usuario no podrá proseguir con el
registro, si no escoge alguna de las opciones, dado que, es un campo requerido.
Pendiente-------------------------------//*/

/*3. Validar el campo teléfono, este campo debe tener una longitud de 7 dígitos únicamente, 
solo puede contener caracteres numéricos y no puede dejarse vacío.

checkTelefono(valor)
module.exports = checkTelefono
Sebastian ------------------------/*/

function checkTelefono(valor) {

    var valor = document.getElementById("telefono").value;
    if(valor == null || valor.length == 0){
        alert("El campo de telefono no puede quedar vacio");
        return;
    }
}


module.export = checkTelefono;

