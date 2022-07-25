//

/*En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.*/

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
const baseUrl = 'https://api.nationalize.io?name=';

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