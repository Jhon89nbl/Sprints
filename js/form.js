// funcion macro que agrupe las funciones de registro
// la funcion macro seria la que se coloque en el onclick registro(para buenas practicas)
// no requerido para el bot





module.exports = checkNombre;
checkNombre(valor)
//Jorge -------

function checkNombre(valor) {

    
    if (valor.length>=4 && valor.length<=30){
        if (valor.length!= 0 && typeof(valor)=='string'){
            return true;
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
    if(valor.length == 0){
        alert("El campo de telefono no puede quedar vacio");
        return;
    }
    if(valor.length > 7){
        alert("el campo no puede ser mayor de 7 digitos");
        return;
    }
}


module.export = checkTelefono;
















/** 5 validar el campo correo, este campo de 
presentar la estructura de un correo, es decir, 
debe verse de la siguiente manera:
usuario@correo.com
Por lo que debe incluir @ seguido del dominio
del correo. Así mismo, el campo no puede
estar vacío Jhon Vargas*/

function checkCorreo() {
    var valor = document.getElementById("correo").value;
    let emailval = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!emailval.test(valor) || valor==""){
        return false;
    }else{
        return true;
    }


}

module.exports= checkCorreo;