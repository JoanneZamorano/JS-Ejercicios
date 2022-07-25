// COMPRENDIDO



const allDiv$$ = document.querySelectorAll('.fn-insert-here');  //busco todos los div con esa clase
for (const div$$ of allDiv$$) {
    const p$$ = document.createElement('p');    //creo p
    
    p$$.textContent = 'Voy dentro!';            // añado texto a p
    div$$.appendChild(p$$);                     // inserto p a los div
}