$(document).ready(function(){

    let cartItems;

    if (localStorage.cartItems == null || localStorage.cartItems == '[]' || localStorage.cartItems.length == 0){ 
        localStorage.setItem("cartItems", '[]');
        console.log("cartItems")
    }else{
        cartItems = JSON.parse(localStorage.cartItems)
        console.log(cartItems)
    }

    if(cartItems != null && cartItems.length > 0 && cartItems != undefined){
        for(let x = 0; x < cartItems.length; x++) {
            createPage(cartItems[x].name, cartItems[x].price, cartItems[x].special, $('tr'));
        }
        $('.blank').remove()
    }

});


function createPage(itemName, itemPrice, special, section) {

        $(section).last().after(`
            <tr class='item'>
                <td><p>${itemName}</p></td>
                <td><p>${itemPrice}</p></td>
                <td><textarea>${special}</textarea/td>
            </tr>
            `)
}