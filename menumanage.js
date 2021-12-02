$(document).ready(function(){

    let button
    xButt() 
    $('.addBtn').click(function() {
        $('.bg-modal').css('display', 'flex');
        button = $(this)
    })
    $('.btnClose').click(function(){
        $('.bg-modal').css('display', 'none');
    })
    $('.btnOrder').click(function(){
        let itemName = $('.itemName').val()
        let itemPrice = $('.itemPrice').val()
        if($('.spicy').prop("checked") == true && $('.veggy').prop("checked") == false) {
            $(button).parent().parent().before(`<div><div class="dont"><p class="sectionDiv-P">${itemName}</p><ion-icon name="flame"></ion-icon></div><div class="priceDiv"><p>$${itemPrice}</p> <button class="xButton">X</button></div></div>`)
            console.log("True && False")
        }else if($('.spicy').prop("checked") == false && $('.veggy').prop("checked") == true) {
            $(button).parent().parent().before(`<div><div class="dont"><p class="sectionDiv-P">${itemName}</p><ion-icon name="leaf"></ion-icon></div><div class="priceDiv"><p>$${itemPrice}</p> <button class="xButton">X</button></div></div>`)
            console.log("False && True")
        }else if($('.spicy').prop("checked") == true && $('.veggy').prop("checked") == true) {
            $(button).parent().parent().before(`<div><div class="dont"><p class="sectionDiv-P">${itemName}</p><ion-icon name="leaf"></ion-icon><ion-icon name="flame"></ion-icon></div><div class="priceDiv"><p>$${itemPrice}</p> <button class="xButton">X</button></div></div>`)
            console.log("True && True")
        }else {
            $(button).parent().parent().before(`<div><p class="sectionDiv-P">${itemName}</p><div class="priceDiv"><p>$${itemPrice}</p><button class="xButton">X</button></div></div>`)
            console.log("False && False")
        }
        console.log($('.spicy').checked)
        console.log($('.veggy').checked)
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

const items = {
    'main' : [{
        "name" : "Caponata",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Chicken Florentine Pasta",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Pasta Fagioli al Forno",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Bellini",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Pizzette with Prawns",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Chicken Parmesan",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Italian Meatball",
        "price" : 9.99,
        "isSpicy" : true,
        "isVeggy" : false,
    },

    {
        "name" : "Calzone",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Caprese Chicken",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },

    {
        "name" : "Rosemary Mushroom Risotto",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false,
    }
    ]
}