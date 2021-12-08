$(document).ready(function(){
    let y, x;
    let page = JSON.parse(localStorage.getItem('receiptArr'))

    for(x = 0; x < page.length; x++) {
        $('.receipt').last().after(`
            <div class="receipt">
                <h2>Receipt</h2>
                <p>Tel: 717-624-3598</p>
                <div class="dashed">

                </div>
            </div>
        `)

        for(y = 0; y < page[x].length - 1; y++) {
            console.log(page[x][y].name)
            console.log(page[x][y].price)
            $('.dashed').last().append(`
                <div class="priceDiv"><p>${page[x][y].name}</p><p>$${page[x][y].price}</p></div>
            `)

        }
        console.log(page[x][y].total)
        $('.dashed').last().after(`
                <div class="total"><p>AMOUNT</p><p>$${page[x][y].total}</p></div>
        `)
    }

});