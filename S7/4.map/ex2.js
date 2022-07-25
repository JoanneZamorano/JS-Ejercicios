//COMPRENDIDO




const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}];

                                    //si empieza por A, cambiar a Anacleto
const newName = users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name);
console.log(newName);
