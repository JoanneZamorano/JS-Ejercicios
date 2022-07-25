// COMPRENDIDO


function swap(array, indice1, indice2){

    const nombre = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = nombre;
    return array;
}

const swapDos = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 2)
