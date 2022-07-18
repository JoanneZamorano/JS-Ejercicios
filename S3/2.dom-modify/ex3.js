const div$$ = document.createElement('div');  //creo div
for (let index = 0; index < 6; index++) {     //creo bucle de 6 (de 0-5)
    const p$$ = document.createElement('p');  //le digo albucle que en cada vueta cree una p
    div$$.appendChild(p$$);                   // y que lo añada a div
}
document.body.appendChild(div$$);             // añado el div al body