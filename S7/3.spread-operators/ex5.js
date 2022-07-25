//COMPRENDIDO





const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colorsCopy = [...colors];        // copio colors
colorsCopy.splice(2,1);               // elimino de la copia amarillo (posicion 2)

console.log(colorsCopy); //compruebo elimiar amarillo de la copia
console.log(colors);      // colors sigue igual