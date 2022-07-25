//COMPRENDIDO



const userAnwsers = [];
//const confirmValue = confirm('Soy un texto');
//const propmtValue = prompt('Soy un texto');

function confirmExample(description){  //recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm.
    return confirm(description)
}

function promptExample(description){  //hará lo mismo pero con un prompt.
    return prompt(description)
}

function father(description, callback){  //recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).
    userAnwsers.push(callback(description))
}

/*Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers*/

father('holaaaaaaaaa soy el ejemplo de confirm', confirmExample);
father('y yo el ejemplo de proooooomp', promptExample);

console.log(userAnwsers);
