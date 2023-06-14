// Write your code here
// const numCoffee = [2, 3, 1, 5];
// price = 1.25;
// const sumPrice = numCoffee.reduce((accPrice, curNumCoffee) => accPrice += curNumCoffee * price);
// console.log(`The total bill is $${sumPrice*price}`);

function coffeeDate(coffeeArr) {
  const sumPrice = coffeeArr.reduce((accCoffeePrice, currCoffee) => accCoffeePrice + currCoffee);
  return `The total bill is $${sumPrice*1.25}`;
}

console.log(coffeeDate([2, 5, 7, 1, 4]));