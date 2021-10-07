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

function checkDir(valor){

    console.log("Verificando Direccion");
    var expRegDir=/^[A-Z \d \# \-]+$/i;
    if(valor == null || valor.length == 0 || !expRegDir.exec(valor) ){
        console.log("El campo de direccion no puede quedar vacio o esta mal escrito");
        return false;
    }
    else{
        console.log("Ok",valor)
        return true;
    }
}


module.export = checkTelefono;


/**Validacion Contraseña */

function checkContrasena(valor) {
    //const passwordValue= password.value.trim();
    let minusculas = "abcdefghijklmnñopqrstuvwxyz";
    let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let tamañoCadena = valor.length;
    let result = true;
    let contMinus = 0;
    let contMayus = 0;
    let contNum = 0;
    for (i = 0; i < valor.length; i++) {
        if (minusculas.indexOf(valor.charAt(i), 0) != -1) {
            contMinus += 1;
        }
        if (mayusculas.indexOf(valor.charAt(i), 0) != -1) {
            contMayus += 1;
        }
        if (numeros.indexOf(valor.charAt(i), 0) != -1) {
            contNum += 1;
        }
    }
    if (contMinus == 0 || contMayus == 0 || contNum == 0 || tamañoCadena < 8) {
        result = false;
    }
    if (valor === "" || valor === null || valor === undefined) {
        result = false;
    }
    return result;
}

/**Validacccion Direccion */
function checkDir(valor){

    var valor = document.getElementById("direccion");
    if(valor == null || valor.length == 0 || !/[a-zA-Z]+\w|[ \w-#]}/.exec(valorDireccion) ){
        console.log("El campo de telefono no puede quedar vacio");
        alert("El campo de telefono no puede quedar vacio");
    }
}








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