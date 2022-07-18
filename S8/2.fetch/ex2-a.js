const input$$ = document.querySelector('input');

const buton$$ = document.querySelector('button');

const search = ()
button$.addEventListener('click', search);


buton$$.addEventListener('clic', fuction()) {
    fetch('https://api.nationalize.io?name='+ input$$.value)
    .then(res => res.json())
    .then(res => console.log(res));
}
