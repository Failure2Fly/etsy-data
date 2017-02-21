console.log(items);

// Problem number 1

// created a variable for our prices contained within the items.js objects
var prices = getItemPrices(items);

//created a function that would take all the prices and return them as an array. 
function getItemPrices(listOfPrices) {
    return listOfPrices.map(function(item) {
        return item.price;
    });
}

// created a function that made the sum of all the numbers in the arrays, which we made equal to var total.   
var total = prices.reduce(function(prev, next) {
    return prev + next;
}, 0);

// console logged the total divided by the length(which gave us our median total) then we used toFixed, to round to the second decimal place and not a full whole number.)
console.log((total/prices.length).toFixed(2));


//Problem number 2

// created a method that would filter through the objects within items that match our price range from 14 to 18 and that are also of USD currency. 

var list = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18 && item.currency_code === "USD";
});
console.log(list);



//Problem number 3

//took the same filter method from above and only searched for items contianing the GBP currency. 
var GBP = items.filter(function(item) {
    return item.currency_code === "GBP";
});

//showed the array we wanted to show plus what part of it. Being the title first then the price. 
console.log((GBP[0].title) + ' ' + '£' + (GBP[0].price));


 
//Problem number 4

//Using a method filter to see if any strings withing material contain the word 'wood'.
var contains = items.filter(function(item) {
    return item.materials.includes('wood');
});

//console logging the titles of all items made with wood
contains.forEach(function(item){
    console.log(item.title + ' is made of wood');
});



//Problem number 5

//Did a filter method just as above but searched within materials for anything containing length equal or over 8.
var materialCount = items.filter(function(item) {
    return item.materials.length >= 8 ;
});
//From then took a forEach method to show each title individually. Combining the title as well as the materials. 
materialCount.forEach(function(itemMaterial) {
    console.log(itemMaterial.title + itemMaterial.materials.join('\n'));
});



//Problem number 6 

// Used the same filter method as the last 2 but to show in the who_made portion of the object the statement i_did. 
var listMade = items.filter(function(item) {
    return (item.who_made.includes('i_did'));
});

console.log(listMade)


    




