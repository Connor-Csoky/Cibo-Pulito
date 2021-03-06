$(document).ready(function(){

    let app, salad, main, pizza, drinks, cartItems = [], button;
    var cItemName, cItemPrice;

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
    
    }if (localStorage.cartItems == null || localStorage.cartItems == '[]' || localStorage.cartItems.length == 0){ 
        localStorage.setItem("cartItems", '[]');
        console.log("cartItems")
    }else{
        cartItems = JSON.parse(localStorage.cartItems)
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

    

    
    $('.plusButton').click(function(){
        $('.bg-modal').css('display', 'flex');
        button = $(this).parent().parent();
    })
    
    $('.btnClose').click(function(){
        $('.bg-modal').css('display', 'none');
        $('.orderInput').val("");
    })

    
    $('.btnOrder').click(function(){
        cItemName = button.find('#name').text()

        cItemPrice = button.find('#price').text()


        let cItemSpecial = $('.orderInput').val();
        cartItems.push({'name' : cItemName, 'price' : cItemPrice, 'special' : cItemSpecial})
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        $('.bg-modal').css('display', 'none');
        $('.orderInput').val("");
    })

});
 
function createPage(itemName, itemPrice, spicy, veggy, section) {

    if(spicy == true && veggy == false) {
        $(section).before(`<div><div class="dont"><p class="sectionDiv-P" id="name">${itemName}</p><ion-icon name="flame"></ion-icon></div><div class="priceDiv"><p>$<span id="price">${itemPrice}</span></p> <button class="plusButton">+</button></div></div>`)

    }else if(spicy == false && veggy == true) {
        $(section).before(`<div><div class="dont"><p class="sectionDiv-P" id="name">${itemName}</p><ion-icon name="leaf"></ion-icon></div><div class="priceDiv"><p>$<span id="price">${itemPrice}</span></p> <button class="plusButton">+</button></div></div>`)

    }else if(spicy == true && veggy == true) {
        $(section).before(`<div><div class="dont"><p class="sectionDiv-P" id="name">${itemName}</p><ion-icon name="leaf"></ion-icon><ion-icon name="flame"></ion-icon></div><div class="priceDiv"><p>$<span id="price">${itemPrice}</span></p> <button class="plusButton">+</button></div></div>`)

    }else {
        $(section).before(`<div><p class="sectionDiv-P" id="name">${itemName}</p><div class="priceDiv"><p>$<span id="price">${itemPrice}</span></p><button class="plusButton">+</button></div></div>`)

    }
}

const appDefault = [{
        "name" : "Mozzerella Sticks",
        "price" : 7.99,
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
        "price" : 8.99,
        "isSpicy" : false,
        "isVeggy" : true
    }] // End of App Section

const saladDefault = [{
        "name" : "Italian Salad",
        "price" : 5.99,
        "isSpicy" : false,
        "isVeggy" : false
    },
    {
        "name" : "Greek Salad",
        "price" : 6.99,
        "isSpicy" : false,
        "isVeggy" : false
    },
    {
        "name" : "Meat Lover Salad",
        "price" : 6.99,
        "isSpicy" : true,
        "isVeggy" : false
    }] // End of Salad Section
  
const mainDefault = [{
        "name" : "Caponata",
        "price" : 11.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },
    {
        "name" : "Chicken Florentine Pasta",
        "price" : 8.99,
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
        "price" : 11.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },
    {
        "name" : "Chicken Parmesan",
        "price" : 10.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },
    {
        "name" : "Italian Meatball",
        "price" : 5.99,
        "isSpicy" : true,
        "isVeggy" : false,
    },
    {
        "name" : "Calzone",
        "price" : 12.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },
    {
        "name" : "Caprese Chicken",
        "price" : 12.99,
        "isSpicy" : false,
        "isVeggy" : false,
    },
    {
        "name" : "Rosemary Mushroom Risotto",
        "price" : 13.99,
        "isSpicy" : false,
        "isVeggy" : false,
    }] // End of Main Section

const pizzaDefault = [{
        "name": "Cheese Pizza",
        "price": 8.99,
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
        "price": 12.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Pizza Pie",
        "price": 11.99,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Sausage Pizza",
        "price": 12.99,
        "isSpicy": false,
        "isVeggy": false,
    }] // End of Pizza Section

const drinksDefault = [{
        "name": "Soft Drink",
        "price": 2.55,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Tea",
        "price": 3.25,
        "isSpicy": false,
        "isVeggy": false,
    },
    {
        "name": "Water",
        "price": 0.99,
        "isSpicy": false,
        "isVeggy": false,
    }] // End of Drinks Section