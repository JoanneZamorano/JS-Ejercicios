// COMPRENDIDO


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


// busco la data function:
const dataFuction$$ = document.querySelector('[data-function="printHere"]'); 

//crear el ul:
const ul$$ = document.createElement('ul'); 
for (const car of cars) {
//crear el li:
    const li$$ = document.createElement('li');

    li$$.textContent = car;
    ul$$.appendChild(li$$);
}

dataFuction$$.appendChild(ul$$);