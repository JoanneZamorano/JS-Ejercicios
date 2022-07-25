// COMPRENDIDO



function nombreDelEvento(event){
    console.log(event.target.value);
}
const input$$ = document.querySelector('input'); //busco elemento
input$$.addEventListener('input', nombreDelEvento);
