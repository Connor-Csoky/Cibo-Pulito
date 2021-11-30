$(document).ready(function(){

    let button
    xButt() 
    $('.addBtn').click(function() {
        $('.bg-modal').css('display', 'flex');
        button = $(this)
        console.log(button)
    })
    $('.btnClose').click(function(){
        $('.bg-modal').css('display', 'none');
    })
    $('.btnOrder').click(function(){
        let itemName = $('.itemName').val()
        let itemPrice = $('.itemPrice').val()
        $(button).parent().parent().before(`<div><p class="sectionDiv-P">${itemName}</p><div class="priceDiv"><p>$${itemPrice}</p><button class="xButton">X</button></div></div>`)
        $('.orderInput').val(" ");
        $('.bg-modal').css('display', 'none');
        xButt()
    })
    
})
    


function xButt() {
    $('.xButton').click(function(){
        $(this).parent().parent().remove()
    });
};