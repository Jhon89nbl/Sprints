/*1. Validar el campo nombre evitando que se ingresencaracteres numéricos, 
restringiendo la longitud entre 4 y 30 caracteres máximo y que elcampo no se deje vacío.

module.exports = checkNombre;
checkNombre(valor)
Jorge -------/*/

function checkNombre(valor) {

    
    if (valor.length>=4 && valor.length<=30){
        if (valor.length!= 0 && typeof(valor)=='string'){
            return true
      }
    }
    
    return false
    
    


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

    var valor = document.getElementById("telefono");
    if (valor == null || valor.length == 0) {
        alert("El campo de telefono no puede quedar vacio");
    }








}

/*4. Validación del campo dirección. Este campo debe de contener caracteres alfanuméricos y únicamente los
caracteres especiales de # y -. Así mismo, el campo deberá de contar con una longitud no mayor a 50
caracteres y al ser un campo requerido no puede quedar vacío.
checkDir(valor)
module.exports = checkDir

Harrison ----------------/*/

function checkDir(valor) {

    var valor = document.getElementById("direccion");
    if (valor == null || valor.length == 0 || !/[a-zA-Z]+\w|[ \w-#]}/.exec(valorDireccion)) {
        console.log("El campo de telefono no puede quedar vacio");
        alert("El campo de telefono no puede quedar vacio");






    }
}


/*5. Validar el campo correo, este campo de presentar la estructura de un correo, es decir,
debe verse de la siguiente manera: usuario@correo.com
Por lo que debe incluir @ seguido del dominio del correo. Así mismo, el campo no puede estar vacío

checkCorreo(valor)
module.exports = checkCorreo;

Jhon -----------------------------///*/
function checkCorreo(valor) {












}

/*6. Validación de la contraseña, en donde el usuario deba de ingresar por lo menos una letra mayúscula, una
minúscula, un número y con una longitud mayor o igual a 8 dígitos. 
Este campo es requerido, por lo que, no se puede dejar vacío.

checkContrasena(valor)
module.exports = checkContrasena;

Johan -------------------------///*/
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