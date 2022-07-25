const printOrders = order =>{
    printOrders.sort((a, b)=>{
        if (a.date > b.date) {
            return -1
        }else if (a.date < b.date){
            return 1
        }else{
            return 0
        }
    });

    for (const order of orders) {
        const div$$ = document.createElemetn('div');
    
        let text = `
        <h2>product number ${order.id}</h2>
        <h3>date: ${order.date} </h3>`

        const printProducts = (products) => {
            text += `<p>${products.name}</p>`
            console.log(text)
            div$$.innerHTML = text;
        }
        fetch(`http://localhost:3000/products/${order.products[0].productId}`)
            .then(res=> res.joson())
            .then(printProducts)

        document.body.appendChild(div$$)
    }
}