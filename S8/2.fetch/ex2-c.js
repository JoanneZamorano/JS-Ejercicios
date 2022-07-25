//En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y 
//que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name=';

const listener =() =>{
    const input$$ = document.querySelector('input');
    function listener(){
        fetch(baseUrl + input$$.value)
        .then(res => res.json())
        .then(res => {console.log(res);})
    }
}

function createp$$(data) {
    let p$$ = document.createElement('p');
    document.body.appendChild(p$$);
    p$$.textContent = `el nombre ${data.name} un ${porcent} porciento de ser de ${country.country.id}`;
}

div$$ = document.createElement('div');
const p$$ = document.createElement('p');
const button$$ = document.createElement('button');

    p$$.textContent = text;
    button$$.innerHTML = 'X';

    div$$.appendChild(p$$);
    div$$.appendChild(button$$);

    button$$.addEventListener('click', () => { removeP(div$$) })
    document.body.appendChild(div$$);

const removeP = (nodeEl$$) => {
    nodeEl$$.remove();
}

const button$ = document.querySelector('button');

button$.addEventListener('click', search);
