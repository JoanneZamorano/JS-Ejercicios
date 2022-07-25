// COMPRENDIDO


//ejercicio 2a:
const baseUrl = 'https://api.nationalize.io?name=';

function listener(){
    const input$$ = document.querySelector('input');

    fetch(baseUrl + input$$.value)
    .then(res => res.json())
    .then(res => {console.log(res);})
}

const buton$$ = document.querySelector('button');
buton$$.addEventListener('click', listener);

//ejercicio 2a:

function listener(){
    const input$$ = document.querySelector('input');

    fetch(baseUrl + input$$.value)
    .then(res => res.json())
    .then(res => {console.log(res);})
}

//ejercicio b:
function createp$$(data) {
    let p$$ = document.createElement('p');
    document.body.appendChild(p$$);
    p$$.textContent = `el nombre ${data.name} un ${porcent} porciento de ser de ${country.country.id}`;
    
}