// COMPRENDIDO


function encontrarObjeto(array, texto) {
    for(let index = 0; index < array.length; i++) {
        let obj = array[index];
        if(obj === texto){
            return index;
        }
    }
}

const animales = encontrarObjeto(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
console.log(animales);

const comidas = encontrarObjeto(['pizza', 'sandwich', 'lentejas', 'gazpacho'], 'sandwich');
console.log(comidas);

const colores = encontrarObjeto(['rojo', 'amarillo', 'azul', 'blanco'], 'azul');
console.log(colores);

const deportes = encontrarObjeto(['baloncesto', 'golf', 'f1', 'ajedrez'], 'ajedrez');
console.log(deportes);