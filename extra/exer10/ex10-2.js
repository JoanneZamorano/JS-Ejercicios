
const characters$$ = document.querySelector("[data-fn='characters']");
let page= 1;

init ()
    function init(){
        getAndPrintCharactes()
        printButton()
    }

async function getCharacters(){
    const res = await fetch('http://localhost:3000/characters?_page=${page}1&_limit=5')
    return res.joson();
}

function printCharacters(characters) {
    for(const character of characters){
        const div$$ = document.createElement('div');

        div$$.innerHTML=`
        <img src="${character.image}"/>
        <h2>${character.name}</h2>`

        characters$$.appendChild(div$$)
    }
};

async function getAndPrintCharactes(){
    const characters = await getCharacters();
    printCharacters(characters);

    page++;
    if(page > 4){
        document.querySelector('button').remove()}
}

function printButton(){
    const btn$$ = document.createElement('button');
    btn$$.textContent= "Cargar más personajes";
    btn$$.addEventListener("click;" getAndPrintCharactes)
    document.body.appendChild(btn$$)

}