//COMPRENDIDO



const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] }

const { name : nameCar, itv } = car;  //dest. car   //cambio name por nameCar
const [year1, year2, year3] = itv;  // dest. itv
    
console.log(nameCar, itv, year1, year2, year3); // se me tachaba name, asiq lo cambié por nameCar arriba