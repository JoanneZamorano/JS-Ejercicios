const baseUrl = 'https://api.nationalize.io?name=';

function listener(){
    fetch(baseUrl + input$$.value)
    .then(res => res.json())
    .then(res => {console.log(res);})
}

const input$$ = document.querySelector('input');
const buton$$ = document.querySelector('button');
buton$$.addEventListener('click', listener);




