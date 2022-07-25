// COMPRENDIDO



// ejercicio 4a-b
const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (const country of countries) {
    const div$$ = document.createElement('div');
    div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;

    const buton$$ = document.createElement('button');
    buton$$.textContent = 'Eliminar';

    div$$.appendChild(buton$$);
    buton$$.addEventListener('click', function () {div$$.remove();})
    document.body.appendChild(div$$);
}


const buton$$ = document.querySelector('button'); //busco el boton
buton$$.addEventListener('click', function () {
    const div$$ = document.body.querySelectorAll('div');
    div$$[div.length - 1].remove();
})


