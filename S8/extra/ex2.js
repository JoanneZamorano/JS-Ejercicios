// HECHO Y COMPRENDIDO

fetch('http://localhost:3000/diary')
    .then((response) => { 
        return response.json();
    })
    .then((datos) => { 
        crearNotas(datos);
    });

    //ordenar las notas

function ordenarFecha(dato) {
    return dato.sort((a, b) => b.date - a.date)
}
//  COPIADO DE LA SOLUCIÓN, NO CONSEGUIA HACERLO:
/*const orderDiaryNotes = (dato) => {
    return dato.sort((a, b) => new Date(a.date) - new Date(b.date))
}*/

    //crear notas del diario
function crearNotas(datos){
    
    for (const dato of datos) {

        const div$$ = document.createElement("div");    
        const h3$$ = document.createElement("h3");        
        const h5$$ = document.createElement("h5");        
        const p$$ = document.createElement("p");  

        h3$$.textContent = dato.title;
        h5$$.textContent = dato.date;
        p$$.textContent = dato.description;

        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        
        document.body.appendChild(div$$);

    // crear boton
        const butt$$ = document.createElement('button');

        butt$$.textContent = 'borrar entrada';
        butt$$.addEventListener('click', () => eliminarNota(div$$))
        div$$.appendChild(butt$$);
        
        document.body.appendChild(div$$);
    }
}
// para borrar la entrada:
const eliminarNota = (nota$$) => {nota$$.remove();}

