//COMPRENDIDO


const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

    const sellTotalCount = products.reduce((accumulator, product) => accumulator + product.sellCount, 0);


console.log(sellTotalCount);