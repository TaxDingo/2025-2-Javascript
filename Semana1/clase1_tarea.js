const {ask} = require ('../helpers/input.js');

async function main() {

    const num1= Number  (await ask ('¿Cual es el primer número?'));
    const num2= Number (await ask('¿Cual es el segundo número?'));

    const suma = num1 + num2;

    
    console.log(`Tu resultado es: ${suma}.`);
}

main();