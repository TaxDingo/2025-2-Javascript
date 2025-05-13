// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff/(1000*60*60*24));
    return edadEnDias;
}
function diffMonth(actualDate, birthDate){
    const diff = actualDate - birthDate;
    const edadEnMes = Math.floor (diff/(1000*60*60*24*30.4166));
    return edadEnMes;
}
function diffYear(actualDate, birthDate){
    const diff = actualDate - birthDate;
    const edadEnAños= Math.floor (diff/ 1000*60*60*24*365);
    return edadEnAños;
}
async function main() {

    const birthDateDay = await ask (`¿Cual es tu día de nacimiento?`);
    const birthDateMonth = await ask (`¿Cual es tu mes de nacimiento?`);
    const birthDateYear = await ask (`¿Cual es tu año de nacimiento?`);

    const birthDate = new Date (`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);
    console.log(`Haz vivido Aproximadamente: ${diffDays(new Date(), birthDate)} Días o ${diffMonth(new Date(),birthDate)} Meses o ${diffYear(new Deate,birthDate)} Años`);
}
main();