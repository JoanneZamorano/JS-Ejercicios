const animalFunction = () => {
    return {
        name: 'Bengal Tiger', 
        race: 'Tiger'}
};

const {name : otroNombre, race} = animalFunction(); // cambio name por otroNombre

console.log(otroNombre, race);  // si ponía name se me tachaba, asi que cambié name por otroNombre arriba.