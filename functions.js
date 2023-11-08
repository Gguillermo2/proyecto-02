
const Math = {};
    //Define la funcion Restar(substract)
    function add(a,b){
    return a + b;
}
    //Define la funcion Restar(substract)
    function substract(a,b){
    return a - b;
}
    //Define la funcion Multiplicar(multiply)
    function multiply(a,b){
    return a * b;
}
    //Define la funcion Dividir(divide)
    function divide(a,b){
    if (b == 0) {
        return "ERROR NO SE PUEDE DIVIDEIRT POR CERO"
    } else {
        return a / b;
    }

    }

    Math.add = add;
    Math.substract = substract;
    Math.multiply = multiply;
    Math.divide = divide;
    
    module.exports = Math;

    //En resumen, este código importa un módulo llamado 'functions.js', que contiene definiciones de funciones matemáticas como add, substract, multiply, y divide Luego, realiza cálculos utilizando estas funciones e imprime los resultados en la consola.