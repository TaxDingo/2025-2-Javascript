const {ask} =require ('../helpers/input');

async function  main(){
    let limite= Number (await ask("¿Hasta que numero quieres contar?  :"));
    i=0;
    while (i <= limite) {
        console.log(i);
        i++;
    }
    i= limite
    while (i >= 0){
        console.log(i);
        i--;    
    }
    const personas = [ "Juan", "Pedro", "Josue", "Pancha", "Patricia", "Karla" ];

    console.log("Ascendente");
    for (let i=0 ; i < personas.length; i++){
        saludar(personas[i]);
    };
    console.log ("Descendente");
    for (let i=personas.length -1 ; i >=0;i--){
        saludar(personas[i]);
    }
    console.log ("foreach");
    personas.forEach((persona) => saludar(persona));

    const frutas = [ "Fresa", "Mango", "Kiwi", "Manzana", "Uvas"];
    const cajon = Number (await ask ("¿Que cajón quieres abrir? (1-5)"));

    for (let j=1; j<=5; j++){
        if (j===cajon){
            console.log("En el cajón hay: ",frutas[j+1]);
        }
    }
}
main();