// COMPRENDIDO


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul'); //crear la ul

for (const country of countries) {

    const li$$ = document.createElement('li'); // crear la li

    li$$.textContent = country;
    document.body.appendChild(li$$);
}

document.body.appendChild(ul$$);

