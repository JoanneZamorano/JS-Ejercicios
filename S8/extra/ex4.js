/*Resources
http://localhost:3000/characters
http://localhost:3000/planets
Home
http://localhost:3000*/

//pintar planetas
/*fetch('http://localhost:3000/planets')
    .then(res => res.json())
    .then(planets => {createPlanets(planets)})

const planets$$ = document.querySelector('[data-function="planets"]');
const characters$$ = document.querySelector('[data-function="characters"]');
const buscador$$ = document.querySelector('[data-function="search"]');

function createCharacters(characters){
    characters$$.innerHTML = ''; //para borrar personajes
    for (const character of characters) {

        const div$$ = document.createElement('div');
        const imagen$$ = document.createElement('img');
        const tittle$$ = document.createElement('h3');

        imagen$$.setAttribute('src', character.avatar);
        tittle$$.textContent = character.name;
        div$$.appendChild(imagen$$);
        div$$.appendChild(tittle$$);
        document.body.appendChild(div$$); 
    }
}

const createPlanets = function (planets){
        for (const planet of planets) {
            const div$$ = document.createElement('div');
            const imagen$$ = document.createElement('img');
            const tittle$$ = document.createElement('h3');

            imagen$$.style = 'width:300px; height:200px;'; 
            div$$.style = 'display:flex; align:center'; 

            imagen$$.setAttribute('src', planet.image);
            tittle$$.textContent = planet.name;

            div$$.appendChild(imagen$$);
            div$$.appendChild(tittle$$);

            imagen$$.addEventListener('click', () => filterCharacter(planet.id));
            document.body.appendChild(div$$);
    }
}

function createBuscador(){
    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");
    button$$.textContent = "Buscar personaje";

    button$$.addEventListener("click", () => filterCharacters(input$$.value))
    search$$.appendChild(button$$)
    search$$.appendChild(input$$)
    document.body.appendChild(search$$); 
}

function filterCharacter(searchValue){
    const searchCharacter = newCharacter.filter((newCharacter) => 
    newCharacter.name.toLowerCase() === searchValue.toLowerCase())
    characters$$.innerHTML = '';

    printCharacters(searchCharacter);
}

/*fetch('http://localhost:3000/characters')
.then(res => res.json())
.then(characters => {
    for (const character of characters) {
        if(character.name.toLowerCase() === searchValue.toLowerCase());}
}*/

const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');
const baseUrl = 'http://localhost:3000/';

createApp();
function createApp() {
    fetch(baseUrl + "planets").then(res => res.json()).then(planets => {
        for (const planet of planets) {
            const planet$$ = document.createElement('div');
            
            planet$$.innerHTML = `
                <img height="200" src="${planet.image}"/>
                <h2>${planet.name}</h2>
            `

            imagen$$.addEventListener('click', () => getCharactersFilteredByPlanet(planet.id));

            planets$$.appendChild(planet$$)
        }
    })
}

let actualCharacters = [];
function getCharactersFilteredByPlanet(idPlanet){
    search$$.innerHTML = '';
    characters$$.innerHTML = '';
    fetch(baseUrl + "characters?idPlanet=" + idPlanet).then(res => res.json()).then(characters => {
        actualCharacters = characters;
        createSearch()
        printCharacters(characters)
    })
}

function createSearch(){
    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");
    button$$.textContent = "Buscar";


    button$$.addEventListener("click", () => filterCharacters(input$$.value))
    search$$.appendChild(input$$)
    search$$.appendChild(button$$)
}

function filterCharacters(searchValue){
    const filteredCharacters = actualCharacters.filter((actualCharacter) => actualCharacter.name.toLowerCase() === searchValue.toLowerCase())
    characters$$.innerHTML = '';

    printCharacters(filteredCharacters);
    
}


function printCharacters (characters) {
    for (const character of characters) {
        const character$$ = document.createElement('div');

        character$$.innerHTML = `
            <img height="200" src="${character.avatar}"/>
            <h2>${character.name}</h2>
        `
        characters$$.appendChild(character$$)
    }
}



