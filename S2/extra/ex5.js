// COMPRENDIDO


function rollDice(min, max){
    return Math.random() * (max - min) + 1;
}

console.log(rollDice(6));


/*La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, 
comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), 
con una distribución aproximadamente uniforme en este rango. Dicho rango puede 
ser ampliado hasta los valores deseados. La implementación selecciona la semilla 
inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta 
elegida o restablecida por el usuario.

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    
*/

