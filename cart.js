$(document).ready(function(){

    let cartItems = [], totalVal = 0, receiptArr = [], tempArr = [];

    if (localStorage.cartItems == null || localStorage.cartItems == undefined || localStorage.cartItems == '[]' || localStorage.cartItems.length == 0){ 
        localStorage.setItem("cartItems", '[]');
        console.log(cartItems + ' = cartItems')
    }else{
        cartItems = JSON.parse(localStorage.cartItems)
    }
    if (localStorage.receiptArr == null || localStorage.receiptArr == undefined || localStorage.receiptArr == '[]' || localStorage.receiptArr.length == 0){ 
        localStorage.setItem("receiptArr", '[]');
        console.log(receiptArr + ' = receiptArr')
    }else{
        receiptArr = JSON.parse(localStorage.receiptArr)
    }
    let currentOrder = 'Order ' + (receiptArr.length + 1);

    if(cartItems != null && cartItems.length > 0 && cartItems != undefined){
        for(let x = 0; x < cartItems.length; x++) {
            createPage(cartItems[x].name, cartItems[x].price, cartItems[x].special, $('tr'));

            totalVal += Number(cartItems[x].price);
            tempArr.push(currentOrder = {
                'name' : cartItems[x].name,
                'price' : cartItems[x].price
            })
        }
        tempArr.push(currentOrder = {'total' : totalVal})
        $('.blank').remove()
    }

    $('.cartTotal').text(totalVal)
    $('.btn-purchase').click(function() {
        localStorage.setItem('cartItems', '[]');
        cartItems = [];
        $('.item').remove()
        receiptArr.push(tempArr)

        localStorage.setItem('receiptArr', JSON.stringify(receiptArr))
    })
});


function createPage(itemName, itemPrice, special, section) {

        $(section).last().after(`
            <tr class='item'>
                <td><p>${itemName}</p></td>
                <td><p>$${itemPrice}</p></td>
                <td><textarea>${special}</textarea/td>
            </tr>
            `)
}