const {ask} = require ('../helpers/input.js');

async function main () {
    const name= await ask ('¿Cual es tu Nombre?');
    const age= Number (await ask ('¿Cual es tu Edad?'));
    
    console.log(`Hola ${name} , tienes ${age} años.`);    
}
main();