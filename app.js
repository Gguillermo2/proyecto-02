    //Esta línea  de código importamos un módulo llamado 'functions.js' utilizando la función require. El módulo 'functions.js' 
    const functions = require('./functions.js')

    //Imprime en la consola el contenido del módulo 'functions.js' que incluye todas las funciones y variables exportadas desde ese archivo.
    console.log(functions);

    //esta liena es simplemente para imprimir un título o una etiqueta en la consola.
    process.stdout.write("Ejercicio\n\n");
    
    //Llamamos a la función llamada add que se encuentra en el módulo 'functions.js' y le doy valor de 10 y 20. Luego, imprime el resultado de esta función en la consola
    console.log(functions.add(10,20));

    // Llama a la función llamada substract que se encuentra en el módulo 'functions.js' y  le doy valor de 50 y 20. Luego, imprime el resultado de esta función en la consola.
    console.log(functions.substract(50,20));

    //Llama a una función llamada multiply que se encuentra en el módulo 'functions.js' y pasa los argumentos 8 y 6. Luego, imprime el resultado de esta función en la consola.
    console.log(functions.multiply(8,6));

    //Llamamos a la función llamada divide que se encuentra en el módulo 'functions.js' y pasa los argumentos 8 y 2. Luego, imprime el resultado de esta función en la consola.
    console.log(functions.divide(8,2));