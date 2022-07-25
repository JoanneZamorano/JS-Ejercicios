// COMPRENDIDO


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; //array

const ul$$ = document.createElement('ul');          // creo ul
for (let index = 0; index < apps.length; index++) { // creo el bucle 
    const app = apps[index];                        // a cada elemento de apps lo llamo app
    const li$$ = document.createElement('li');      // creo li

    li$$.textContent = app;                         // añado el texto de cada app a cada li
}
document.body.appendChild(ul$$);                    // añado ul al body