//correcto

/*En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los 
personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.
Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.*/


fetch('https://breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(characters => {createCharacters(characters)})


const createCharacters = function (characters){
    for (const character of characters) {
        const div$$ = document.createElement('div');
        const imagen$$ = document.createElement('img');
        const tittle$$ = document.createElement('h3');

        imagen$$.setAttribute('src', character.img);
        tittle$$.textContent = character.name;
        div$$.appendChild(imagen$$);
        div$$.appendChild(tittle$$);
        document.body.appendChild(div$$);
    }
}
