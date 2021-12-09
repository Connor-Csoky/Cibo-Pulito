$(document).ready(function(){

    let cartItems = [], totalVal = 0, receiptArr = [], tempArr = [], arrLength = 0;

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
        totalVal = formatToCurrency(totalVal)
        tempArr.push(currentOrder = {'total' : totalVal})
        $('.blank').css('display', 'none')
    }else{
        totalVal = formatToCurrency(totalVal)
    }

    console.log(arrLength)

    $('.cartTotal').text(totalVal)

    if(cartItems.length == 0){
        $('.btn-purchase').prop('disable', true);
        console.log('test')
    }
    else {
        $('.btn-purchase').click(function() {
            localStorage.setItem('cartItems', '[]');
            cartItems = [];
            receiptArr.push(tempArr)
    
            localStorage.setItem('receiptArr', JSON.stringify(receiptArr))
            tempArr = []
            $('.bg-modal').css('display', 'flex');
            $('.btn-purchase').prop('disable', true);
            
        })
    }

    $('.xButton').click(function(){
        let temp = $(this).parent().siblings().find('.itemName').text()
        console.log(temp)
        let funLock = false;

        for(let x = 0; x < cartItems.length; x++) {
            if(cartItems[x].name == temp && funLock == false){
                funLock = true
                arrLength = tempArr.length

                tempArr[arrLength - 1].total -= cartItems[x].price
                totalVal -= cartItems[x].price

                totalVal = formatToCurrency(totalVal)
                tempArr[arrLength - 1].total = formatToCurrency(tempArr[arrLength - 1].total)

                $('.cartTotal').text(totalVal)

                cartItems.splice(x, 1)
                tempArr.splice(x, 1)
                                
                console.log(tempArr)
                console.log(cartItems)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                $(this).parent().parent().remove()
                if(cartItems == null || cartItems.length <= 0 || cartItems == undefined){
                    $('.blank').css('display', 'contents')
                    $('.btn-purchase').prop('disable', true);  
                }

            }
        }
    });
    
});

const formatToCurrency = amount => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

function createPage(itemName, itemPrice, special, section) {

        $(section).last().after(`
            <tr class='item'>
                <td><p class="itemName test">${itemName}</p></td>
                <td><p class="test">$${itemPrice}</p></td>
                <td><textarea class="test">${special}</textarea/td>
                <td><p class="xButton">X</p></td>
            </tr>
            `)
}