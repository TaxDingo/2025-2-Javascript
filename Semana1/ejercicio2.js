const {ask} = require ('../helpers/input.js');


async function main() {

    const age = Number(await ask('¿Cuantos años tienes?  :'));
    const genere = await ask('¿Cual es tu género? (hombre/mujer) : ');

    if ((age >= 1 && age < 18) && (genere === 'hombre')) {

        console.log(`Eres un hombre menor de edad.`);
    }
    else if ((age >= 18 && age < 130) && (genere === 'hombre')) {
        console.log(`Eres un hombre mayor de edad.`);
    }
    else if ((age >= 1 && age < 18) && (genere === 'mujer')) {

        console.log(`Eres una mujer menor de edad.`);
    }
    else if ((age >= 18 && age < 130) && (genere === 'mujer')){
        console.log(`Eres una mujer mayor de edad`);

    }
    else {
        console.log("No se cumplen los criterios de la busqueda.")
    }
}
main();