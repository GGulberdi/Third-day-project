
console.log("leaveHouse");
console.log("turn left");
console.log("go to the market");
console.log("buy 3 bottle of drink");
console.log("pay for drink");

////gfdf///////////////////
let total = prompt ("How much money do you have?")
let perDrink= prompt("How much is the price per item")

function calcBottles( ){
    if (total > 0 && perDrink > 0) {
        return  Math.floor(total / perDrink)
    }  else if (total < 0 || perDrink < 0) {
        return "Price or total amount of money cannot be negative."
     
     }
}
console.log(calcBottles());

//calculate change
function calChange(){

   return `And, here is $${(total % perDrink).toFixed(2)} change`
}
console.log(calChange())

console.log("leave market");
console.log('come back to the house');

//Zeynep
// function directions() {
//     return "I will leave house. Turn Left. Turn Right. Go to Market. Buy drinks. Pay for the drinks. Take change. Leave Market. Turn Right. Turn Left. Enter house. Hello Zeynep, here is your change.";
//     }
//     console.log(`${directions()}`);
    
    
//     let totalMoney = prompt("How much money do you have?");
//     let pricePerDrink = prompt("How much is the price per drink?");
    
//     function calcBottles() {
//       if (pricePerDrink > 0 && totalMoney > 0) { 
//         return (totalMoney/pricePerDrink).toFixed(0); 
//       } else if (pricePerDrink < 0 || totalMoney <0)
//         return "Price or total amount of money cannot be negative.";
//     }
//     console.log(`${calcBottles()}`);
    
//     function calcChange() {
//       return totalMoney - (pricePerDrink * calcBottles()); 
//     }
//     console.log(`${calcChange()}`);
    
//     function getDrink() {
//     return `${directions()} I bought ${calcBottles()} drinks with ${totalMoney} dollars and your change is ${calcChange()}. Bye.`;
//     }
//     console.log(`${getDrink()}`);