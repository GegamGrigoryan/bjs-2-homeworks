"use strict"
function solveEquation(a, b, c) {
  const discriminant = (b ** 2) - 4 * a * c;
  let arr = [];

  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root)
  }

  if (discriminant > 0) {
    let decisionOne = (-b + Math.sqrt(d)) / (2 * a);
    let decisionTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(decisionOne)
    arr.push(decisionTwo)
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let payment;
  let sumCount;
  let monthPer = percent / 100 / 12;
  let bodyCredit = amount - contribution;

  if (
    isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)
  ) {
    return false;
  }
  payment =
    bodyCredit * (monthPer + monthPer / ((1 + monthPer) ** countMonths - 1))
  sumCount = payment * countMonths;


  return parseFloat(sumCount.toFixed(2))
}