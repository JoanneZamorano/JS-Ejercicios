//COMPRENDIDO


const example1 = (a = 10, b = 5) => {
    console.log(a + b)
}

example1();     // - Ejecuta esta función sin pasar ningún parametro - daria 15

example1(20); // - Ejecuta esta función pasando un solo parametro, daria 25 (20+5)

example1(50, 10); // Ejecuta esta función pasando dos parametros, daria 60 (50+10)


