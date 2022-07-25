//COMPRENDIDO



const numbersList = [];

function sum(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function father(a, b, callback){
    numbersList.push(callback(a, b));
}

// ejecutamos el codigo de father

father(5, 2, sum);
father(8, 2, substract);

console.log(numbersList);
