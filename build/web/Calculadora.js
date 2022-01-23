/* 
Nombre: Jesus Ramses Valenzuela Almada 
ID: 00000216773
Fecha: 21/11/2021
 */

/**
 * Variable para definir la operacion.
 * @type Number|Number|Number|Number
 */
var operacion;

/**
 * Establece la operacion en 1 = suma
 * @returns {undefined}
 */
function suma() {
    operacion = 1;
}
/**
 * Establece la operacion en 2 = resta
 * @returns {undefined}
 */
function restar() {
    operacion = 2;
}
/**
 * Establece la operacion en 3 = multiplicacion
 * @returns {undefined}
 */
function multipli() {
    operacion = 3;
}
/**
 * Establece la operacion en 4 = division
 * @returns {undefined}
 */
function division() {
    operacion = 4;
}
/**
 * Borra los campos de numero 
 * @returns {undefined}
 */
function reset() {
    document.getElementById('resultado').value = " ";
    document.getElementById('numero2').value = " ";
    document.getElementById('numero1').value = " ";
}
/**
 * Metodo que manda a llamar a resolver para dar el resultado
 * @returns {undefined}
 */
function igual() {
    resolver();
}

/**
 * Metrodo que realiza las operaciones basicas. 
 * @returns {undefined}
 */
function resolver() {
    var res = 0;
    switch (operacion) {
        case 1:
            res = parseFloat(document.getElementById('numero1').value) + parseFloat(document.getElementById('numero2').value);
            break;
        case 2:
            res = parseFloat(document.getElementById('numero1').value) - parseFloat(document.getElementById('numero2').value);
            break;
        case 3:
            res = parseFloat(document.getElementById('numero1').value) * parseFloat(document.getElementById('numero2').value);
            break;
        case 4:
            res = parseFloat(document.getElementById('numero1').value) / parseFloat(document.getElementById('numero2').value);
            break;
    }
    document.getElementById('resultado').value = res;
}
