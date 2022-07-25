// COMPRENDIDO


//ejercicio 4:
function encontrarObjeto(array, texto) {
    for(let index = 0; index < array.length; i++) {
        let obj = array[index];
        if(obj === texto){
            return index;
        }
    }
}
// ejercicio 5 
function borrarObjeto(array, texto){
    const index = encontrarObjeto(array, texto);
    array.splice(index, 1);
    return array;
}
const borrarAnimal = encontrarObjeto(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
console.log(borrarAnimal);

const borrarComidas = encontrarObjeto(['pizza', 'sandwich', 'lentejas', 'gazpacho'], 'sandwich');
console.log(borrarComidas);

const borrarColores = encontrarObjeto(['rojo', 'amarillo', 'azul', 'blanco'], 'azul');
console.log(borrarColores);

const borrarDeportes = encontrarObjeto(['baloncesto', 'golf', 'f1', 'ajedrez'], 'ajedrez');
console.log(borrarDeportes);