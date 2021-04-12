exports.myName = () => {
  return "im Nico";
};

exports.myAge = () => {
  return "im 21";
};

exports.company = "DCI";

exports.courseData = {
  title: "fwb-41",
  menbers: 17,
  year: 2021,
};

exports.makeDev = function () {
  return "we are learning back-end from today ";
};

const addition = () => {
  return 10 + 50;
};

subtraction(a - b);
division(a / b);
reminder(a % b);
multiplication(a * b);

let deliveryFoodQuantity = {
  shop1: 20,
  shop2: 30,
  shop3: 40,
};

let foodEuros = {
  apples: 1,
  bananas: 2,
  oranges: 3,
};

const letsCalculateApples = (deliveryFoodQuantity, foodEuros) => {
  return deliveryFoodQuantity * foodEuros;
};

const letsCalculateBananas = (deliveryFoodQuantity, foodEuros) => {
  return deliveryFoodQuantity / foodEuros;
};

const letsCalculateOranges = (deliveryFoodQuantity, foodEuros) => {
  return deliveryFoodQuantity - foodEuros;
};

module.exports = {
  deliveryFoodQuantity,
  foodEuros,
  letsCalculateApples,
  letsCalculateBananas,
  letsCalculateOranges,
};
