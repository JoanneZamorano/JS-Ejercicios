const baseUrl = 'https://opentdb.com/api.php?amount=10';
const body$$ = document.querySelector('[data-function="gameboard"]'); //busco el div del body donde van las preguntas y respuestas
const input$$ = document.querySelector('[data-function="questions-number"]'); // busco el input
/*results": [
{
    "category": "Sports",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
    "correct_answer": "Hammer",
    "incorrect_answers": [
    "Wrench",
    "Drill",
    "Screwdriver"
]
css= preguntas h2 respuestas p 
*/

const startGame = ()=> {
    fetch (baseUrl /*+ input$$.value*/)
    .then(res => res.json())
    .then(res => {preguntas(res.results)});
}

//creo las preguntas
const preguntas = (questions)=> {
    for (const question of questions) {

        const h2$$ = document.createElement('h2');
        h2$$.textContent = question.question;

        body$$.appendChild(h2$$); // añado el h2 al body

        respuestas(answer);
        //respuestas.appendChild(p$$);
        
    }
}
//creo las respuestas
const respuestas = (answers)=> {
    for (const answer of answers) {

        const p$$ = document.createElement('p');
        p$$.textContent = answer;
        body$$.appendChild(p$$);
        //para selecionar la respuesta ¿addEvenListener?
    }
}
startGame ();
respuestas();
