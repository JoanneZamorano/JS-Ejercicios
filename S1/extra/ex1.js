//COMPRENDIDO


const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}];



    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        
        if(user.years >= 18){
            console.log('Usuarios menores de edad: ' + user.name)
        } else{
            console.log('Usuarios mayores de edad: ' + user.name)
        }
    }

