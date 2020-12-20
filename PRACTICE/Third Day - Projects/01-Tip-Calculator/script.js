
const rest1 = 124;
const rest2 = 48;
const rest3 = 75;
const rest4 = 268; 
let totalbudget = 750;

function calculateTips(bill) {

    if (bill < 50) {
        return 0.2;
    } else if (bill > 50 && bill < 200){
 return (bill * 15/100).toFixed(2)
    }    else if (bill > 200) {
        return (bill * 10/100).toFixed(2)
    }
}

console.log(calculateTips())

let tip1 = 18.6;
let tip2 = 9.60;
let tip3 = 11.25
let tip4 = 26.80
let totaltip =(tip1+tip2+tip3+tip4)

console.log(`In restaurant-1 John paid $${rest1} bill and $${tip1} tips`);
console.log(`In restaurant-2 John paid $${rest2} bill and $${tip2} tips`);
console.log(`In restaurant-3 John paid $${rest3} bill and $${tip3} tips`);
console.log(`In restaurant-4 John paid $${rest4} bill and $${tip4} tips`);

function getTotalTips(){
return (res1+rest2+rest3+rest4+totalTip)
}
console.log(getTotalTips);


function budgetDust(){

 }

console.log(budgetDust())