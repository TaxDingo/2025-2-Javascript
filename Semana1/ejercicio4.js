// Ejercicio: Crear una función que reciba dos números y devuelva el mayor de ellos
//
// Instrucciones:
// 1. Crear una función llamada `obtenerMayor` que reciba dos números como parámetros.
// 2. La función debe devolver el mayor de los dos números.
// 3. Pedir al usuario que ingrese dos números y mostrar el resultado de la función `obtenerMayor`.

const { ask } = require('../helpers/input');

function obtenerMayor (a,b){

    if (a > b){
        return `El numero ${a} es Mayor que ${b}`;
    }else {
        return `El número ${b} es Mayor que ${a}`;
    }
} 

async function main() {
    
    const num1=Number (await ask( "Dame un número: "));
    const num2=Number (await ask( "Dame un segundo número: "));
    if(num1===num2){
        console.log ("Los numeros son iguales")
    } else {
    const resultado = obtenerMayor(num1,num2);
    console.log (resultado);
    }
}

main();
// TODO: Función que devuelve el mayor de dos números