// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    let limite = Number (await ask("¿Hasta que numero quieres contar en numeros pares? :"));
    let i =0; 

        for (i = 0; i <= limite ;i+=2){
            if (i %2 ===0){
                console.log(i);
            }
        } 

}

main();