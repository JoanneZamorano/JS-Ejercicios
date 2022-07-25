// COMPRENDIDO


function elementFocus(event){
    console.log(event.target.value);
}

const input$$ = document.querySelector('input');

input$$.addEventListener('focus', elementFocus);