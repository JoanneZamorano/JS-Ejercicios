const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');

createPlanetas();
function createPlanetas() {
    fetch("http://localhost:3000/planets")
        .then(res => res.json())
        .then(planets => {
            for (const planet of planets) {
                const planet$$ = document.createElement('div');
            
                planet$$.innerHTML = `
                    <img weigth="300" height="200" src="${planet.image}"/>
                    <h2>${planet.name}</h2>`

                imagen$$.addEventListener('click', () =>FilterPlanet(planet.id));

                planets$$.appendChild(planet$$)
            }
        })
    }

let charactersByIdPlanet = [];
function FilterPlanet(idPlanet){
    search$$.innerHTML = '';
    characters$$.innerHTML = '';
    
    fetch("http://localhost:3000/characters?idPlanet=" + idPlanet)
        .then(res => res.json())
        .then(characters => {
            charactersByIdPlanet = characters;
            createBuscador()
            pintarCharacter(characters)
        })
    }

function createBuscador(){
    const input$$ = document.createElement("input");
    const butt$$ = document.createElement("button");
    butt$$.textContent = "Buscar personaje";


    butt$$.addEventListener("click", () => filterCharacters(input$$.value))
    search$$.appendChild(input$$)
    search$$.appendChild(butt$$)
}

function filterCharacters(searchValue){
    const filteredCharacters = charactersByIdPlanet.filter((charactersByIdPlanet) => 
    charactersByIdPlanet.name.toLowerCase() === searchValue.toLowerCase())
    
    characters$$.innerHTML = '';

    pintarCharacter(filteredCharacters);
}


function pintarCharacter (characters) {
    for (const character of characters) {
        const character$$ = document.createElement('div');

        character$$.innerHTML = `
            <img height="200" src="${character.avatar}"/>
            <h2>${character.name}</h2>`

        characters$$.appendChild(character$$)
    }
}
