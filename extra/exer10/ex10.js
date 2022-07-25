const baseUrl = 'http://localhost:3000/characters';

const contadorLol= 1;
function sumAids (){
    contadorLol++;
    if(contadorAids > 4){
        window.confirm('suficientes aids por hoy');
        botton$$.remove();
    }else{
        pintarGaleria();
    }
}


//   pintar galeria
pintarGaleria();
function pintarGaleria(){
    fetch(baseUrl + '?_page=1&_limit=5') //   filtar por los 5 primeros
    .then(res => res.json())
    .then(characters => {
        for (const character of characters) {
            const div$$ = document.createElement('div');
            document.body.appendChild(div$$);
            div$$.innerHTML = `<h1>${character.id}</h1>
                                <h3>${character.name}</h3>
                                <img width="100" src="${character.image}">`
            //estilos imagen:
            //div$$.setAttribute("style","display:flex; flex-direction:column; align-items:center; flex-wrap:wrap");
            //div$$.appendChild(div$$);
            //document.body.appendChild(div$$);
        }if(contadorLol === 1){
        //   pintar boton
        button$$ = document.createElement('button');
        document.body.appendChild(button$$);
        button$$.textContent ='Cargar más';
        button$$.addEventListener('click', sumLol());
    }
    })
}


