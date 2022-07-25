//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
let totalA = 0;

for (const animal of animals) {
    console.log(animal);
    for (const letra of animal) {
        if (letra === 'a') {
            totalA++
        }
    }
}
console.log(totalA);