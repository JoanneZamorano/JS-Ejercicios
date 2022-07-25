//COMPRENDIDO



const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const lolfilter = streamers.filter(streamers => {
    const toReturn = streamers.gameMorePlayed.toLowerCase().includes ('legends');  //hay que incluir lowerCase y upperCase, si no no funciona!!!!!
    if (toReturn && streamers.age >35){
        streamers.gameMorePlayed = streamers.gameMorePlayed.toUpperCase();
    }
    return toReturn;
} )

console.log(lolfilter);
