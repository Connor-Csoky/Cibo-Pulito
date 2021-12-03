$(document).ready(function(){

    let app, salad, main, pizza, drinks;

    if (localStorage.app == null || localStorage.app == '[]' || localStorage.app.length == 0){
        console.log(app)
        app = appDefault; 
        localStorage.setItem("app", JSON.stringify(app));
        console.log("app")
    }else{
        app = JSON.parse(localStorage.app)
    }
    if (localStorage.salad == null || localStorage.salad == '[]' || localStorage.salad.length == 0){
        console.log(salad)
        salad = saladDefault; 
        localStorage.setItem("salad", JSON.stringify(salad));
        console.log("salad")
    }else{
        salad = JSON.parse(localStorage.salad)
    }
    if (localStorage.main == null || localStorage.main == '[]' || localStorage.main.length == 0){
        console.log(main)
        main = mainDefault; 
        localStorage.setItem("main", JSON.stringify(main));
        console.log("main")
    }else{
        main = JSON.parse(localStorage.main)
    }
    if (localStorage.pizza == null || localStorage.pizza == '[]' || localStorage.pizza.length == 0){
        console.log(pizza)
        pizza = pizzaDefault; 
        localStorage.setItem("pizza", JSON.stringify(pizza));
        console.log("pizza")
    }else{
        pizza = JSON.parse(localStorage.pizza)
    }
    if (localStorage.drinks == null || localStorage.drinks == '[]' || localStorage.drinks.length == 0){
        console.log(drinks)
        drinks = drinksDefault; 
        localStorage.setItem("drinks", JSON.stringify(drinks));
        console.log("drinks")
    }else{
        drinks = JSON.parse(localStorage.drinks)
    }


    for(let x = 0; x < app.length; x++) {
        createPage(app[x].name, app[x].price, app[x].isSpicy, app[x].isVeggy, $('.appSelector'));
    }
    for(let x = 0; x < salad.length; x++) {
        createPage(salad[x].name, salad[x].price, salad[x].isSpicy, salad[x].isVeggy, $('.saladSelector'));
    }
    for(let x = 0; x < main.length; x++) {
        createPage(main[x].name, main[x].price, main[x].isSpicy, main[x].isVeggy, $('.mainSelector'));
    }
    for(let x = 0; x < pizza.length; x++) {
        createPage(pizza[x].name, pizza[x].price, pizza[x].isSpicy, pizza[x].isVeggy, $('.pizzaSelector'));
    }
    for(let x = 0; x < drinks.length; x++) {
        createPage(drinks[x].name, drinks[x].price, drinks[x].isSpicy, drinks[x].isVeggy, $('.drinksSelector'));
    }
    

    $('.xButton').click(function(){
        let temp = $(this).parent().parent().find('.sectionDiv-P').text()
        console.log(temp)
        // if(app.includes(temp)){
        //     app.splice(app.indexOf(temp),1)
        //     console.log(app)
        // }else if(salad.includes(temp)){
        //     salad.splice(salad.indexOf(temp),1)
        //     console.log(salad)
        // }else if(main.includes(temp)){
        //     main.splice(main.indexOf(temp),1)
        //     console.log(main)
        // }else if(pizza.includes(temp)){
        //     pizza.splice(pizza.indexOf(temp),1)
        //     console.log(pizza)
        // }else if(drinks.includes(temp)){
        //     drinks.splice(drinks.indexOf(temp),1)
        //     console.log(drinks)
        // }


        for(let x = 0; x < app.length; x++) {
            if(app[x].name == temp){
                app.splice(x, 1)
                console.log(app)
                localStorage.setItem('app', JSON.stringify(app))
            }
        }
        for(let x = 0; x < salad.length; x++) {
            if(salad[x].name == temp){
                salad.splice(x, 1)
                console.log(salad)
                localStorage.setItem('salad', JSON.stringify(salad))
            }
        }
        for(let x = 0; x < main.length; x++) {
            if(main[x].name == temp){
                main.splice(x, 1)
                console.log(main)
                localStorage.setItem('main', JSON.stringify(main))
            }
        }
        for(let x = 0; x < pizza.length; x++) {
            if(pizza[x].name == temp){
                pizza.splice(x, 1)
                console.log(pizza)
                localStorage.setItem('pizza', JSON.stringify(pizza))
            }
        }
        for(let x = 0; x < drinks.length; x++) {
            if(drinks[x].name == temp){
                drinks.splice(x, 1)
                console.log(drinks)
                localStorage.setItem('drinks', JSON.stringify(drinks))
            }
        }


        $(this).parent().parent().remove()

    });
    
    let button;

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

        console.log(button + " Test")
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
        

        if($('#btn1.addBtn').id == button){
            
            app.push({'name' : itemName, 'price' : itemPrice, 'isSpicy' : $('.spicy').prop("checked"), 'isVeggy' : $('.veggy').prop("checked")})
            console.log(app)
            localStorage.setItem('app', JSON.stringify(app))

        }else if($('#btn2.addBtn').id == button){

            salad.push({'name' : itemName, 'price' : itemPrice, 'isSpicy' : $('.spicy').prop("checked"), 'isVeggy' : $('.veggy').prop("checked")})
            console.log(salad)
            localStorage.setItem('salad', JSON.stringify(salad))

        }else if($('#btn3.addBtn').id == button){

            main.push({'name' : itemName, 'price' : itemPrice, 'isSpicy' : $('.spicy').prop("checked"), 'isVeggy' : $('.veggy').prop("checked")})
            console.log(main)
            localStorage.setItem('main', JSON.stringify(main))

        }else if($('#btn4.addBtn').id == button){

            pizza.push({'name' : itemName, 'price' : itemPrice, 'isSpicy' : $('.spicy').prop("checked"), 'isVeggy' : $('.veggy').prop("checked")})
            console.log(pizza)
            localStorage.setItem('pizza', JSON.stringify(pizza))

        }else if($('#btn5.addBtn').id == button){

            drinks.push({'name' : itemName, 'price' : itemPrice, 'isSpicy' : $('.spicy').prop("checked"), 'isVeggy' : $('.veggy').prop("checked")})
            console.log(drinks)
            localStorage.setItem('drinks', JSON.stringify(drinks))

        }





        // app.push({'name' : 'banana','price' : 100,'isSpicy' : true, 'isVeggy' : false})
        // localStorage.setItem('app', JSON.stringify(app))

        $('.orderInput').val("");
        $('.bg-modal').css('display', 'none');

        $('.xButton').click(function(){
            let temp = $(this).parent().parent().find('.sectionDiv-P')
            if(app.indexOf(temp) != -1){
                app.splice(app.indexOf(temp),1)
                console.log(app)
            }else if(salad.indexOf(temp) != -1){
                salad.splice(salad.indexOf(temp),1)
                console.log(salad)
            }else if(main.indexOf(temp) != -1){
                main.splice(main.indexOf(temp),1)
                console.log(main)
            }else if(pizza.indexOf(temp) != -1){
                pizza.splice(pizza.indexOf(temp),1)
                console.log(pizza)
            }else if(drinks.indexOf(temp) != -1){
                drinks.splice(drinks.indexOf(temp),1)
                console.log(drinks)
            }
            $(this).parent().parent().remove()
    
        });
    })
    
    console.log(app);
    console.log(salad);
    console.log(main);
    console.log(pizza);
    console.log(drinks);
})

function createPage(itemName, itemPrice, spicy, veggy, section) {

        if(spicy == true && veggy == false) {
            $(section).before(`<div><div class="dont"><p class="sectionDiv-P">${itemName}</p><ion-icon name="flame"></ion-icon></div><div class="priceDiv"><p>$${itemPrice}</p> <button class="xButton">X</button></div></div>`)

        }else if(spicy == false && veggy == true) {
            $(section).before(`<div><div class="dont"><p class="sectionDiv-P">${itemName}</p><ion-icon name="leaf"></ion-icon></div><div class="priceDiv"><p>$${itemPrice}</p> <button class="xButton">X</button></div></div>`)

        }else if(spicy == true && veggy == true) {
            $(section).before(`<div><div class="dont"><p class="sectionDiv-P">${itemName}</p><ion-icon name="leaf"></ion-icon><ion-icon name="flame"></ion-icon></div><div class="priceDiv"><p>$${itemPrice}</p> <button class="xButton">X</button></div></div>`)

        }else {
            $(section).before(`<div><p class="sectionDiv-P">${itemName}</p><div class="priceDiv"><p>$${itemPrice}</p><button class="xButton">X</button></div></div>`)

        }
    }

 
const appDefault = [{
        "name" : "Mozzerella Sticks",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : true
    },
    {
        "name" : "Bruschetta",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : true
    },
    {
        "name" : "Caprese Salad",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : true
    }] // End of App Section

const saladDefault = [{
        "name" : "Italian",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false
    },
    {
        "name" : "Greek",
        "price" : 9.99,
        "isSpicy" : false,
        "isVeggy" : false
    },
    {
        "name" : "Meat Lover Salad",
        "price" : 9.99,
        "isSpicy" : true,
        "isVeggy" : false
    }] // End of Salad Section
  
const mainDefault = [{
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
    }] // End of Main Section

const pizzaDefault = [{
        "name": "Cheese Pizza",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Pepporoni Pizza",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Hawaian Pizza",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Pizza Pie",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Sausage Pizza",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    }] // End of Pizza Section

const drinksDefault = [{
        "name": "Rootbeer",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Coke",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Sierra Mist",
        "price": 9.99,
        "isSpicy": false,
        "isVeggy": false,
    }] // End of Drinks Section

