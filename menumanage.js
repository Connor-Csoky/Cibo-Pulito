
    $('#btn1').click(function() {
        $('.bg-modal').css('display', 'flex'); 
        
        $('.btnOrder').click(function(){
            let itemName = $('.itemName').val()
            let itemPrice = $('.itemPrice').val()
            $('#btn1').parent().parent().before(`<div><p class="sectionDiv-P">${itemName}</p><div class="priceDiv"><p>$${itemPrice}</p><button class="xButton">X</button></div></div>`).append()
            $('.orderInput').val(" ");
            $('.bg-modal').css('display', 'none');
        })

        $('.btnClose').click(function(){
            $('.bg-modal').css('display', 'none');
        })
    })
    
    // $('#btn2').click(function() {
    //     $('.bg-modal').css('display', 'flex'); 
        
    //     $('.btnOrder').click(function(){
    //         let itemName2 = $('.itemName').val()
    //         let itemPrice2 = $('.itemPrice').val()
    //         $('#btn2').parent().parent().before(`<div><p class="sectionDiv-P">${itemName2}</p><div class="priceDiv"><p>$${itemPrice2}</p><button class="xButton">X</button></div></div>`).append()
    //         $('.orderInput').val(" ");
    //         $('.bg-modal').css('display', 'none');
    //     })

    //     $('.btnClose').click(function(){
    //         $('.bg-modal').css('display', 'none');
    //     })
    // })

    //  $('#btn3').click(function() {
    //     $('.bg-modal').css('display', 'flex'); 
        
    //     $('.btnOrder').click(function(){
    //         let itemName3 = $('.itemName').val()
    //         let itemPrice3 = $('.itemPrice').val()
    //         $('#btn3').parent().parent().before(`<div><p class="sectionDiv-P">${itemName3}</p><div class="priceDiv"><p>$${itemPrice3}</p><button class="xButton">X</button></div></div>`).append()
    //         $('.orderInput').val(" ");
    //         $('.bg-modal').css('display', 'none');
    //     })

    //     $('.btnClose').click(function(){
    //         $('.bg-modal').css('display', 'none');
    //     })
    // })

    // $('#btn4').click(function() {
    //     $('.bg-modal').css('display', 'flex'); 
        
    //     $('.btnOrder').click(function(){
    //         let itemName4 = $('.itemName').val()
    //         let itemPrice4 = $('.itemPrice').val()
    //         $('#btn4').parent().parent().before(`<div><p class="sectionDiv-P">${itemName4}</p><div class="priceDiv"><p>$${itemPrice4}</p><button class="xButton">X</button></div></div>`).append()
    //         $('.orderInput').val(" ");
    //         $('.bg-modal').css('display', 'none');
    //     })

    //     $('.btnClose').click(function(){
    //         $('.bg-modal').css('display', 'none');
    //     })
    // })

    // $('#btn5').click(function() {
    //     $('.bg-modal').css('display', 'flex'); 
        
    //     $('.btnOrder').click(function(){
    //         let itemName5 = $('.itemName').val()
    //         let itemPrice5 = $('.itemPrice').val()
    //         $('#btn5').parent().parent().before(`<div><p class="sectionDiv-P">${itemName5}</p><div class="priceDiv"><p>$${itemPrice5}</p><button class="xButton">X</button></div></div>`).append()
    //         $('.orderInput').val(" ");
    //         $('.bg-modal').css('display', 'none');
    //     })
    //     $('.btnClose').click(function(){
    //         $('.bg-modal').css('display', 'none');
    //     })
        
    // })



$('.xButton').click(function(){
    $(this).parent().parent().remove()
})