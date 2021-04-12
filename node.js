// // const server = require("./server");

// // console.log("hello" + server.myName() + "and im" + server.myAge());

// const newFunction = require("./server");

// console.log(newFunction.company + newFunction.makeDev);

// const bringMyData = require("./server");

//alternativer syntax to export
const data = require("./alternativeSyntax");

console.log(data);

// importing another way, if the function is executed in the main file ( mid grenade in this case)
require("./mid-grenade");

// console.log(bringMyData);

// console.log(
//   "How many apples do i have in shop one?" +
//     bringMyData.deliveryFoodQuantity.shop1 +
//     bringMyData.letsCalculateApples(1, 3)
// );

// console.log(
//   "How many apples do i have in shop one?" +
//     bringMyData.deliveryFoodQuantity.shop2 +
//     bringMyData.letsCalculateBananas(1, 3)
// );

// console.log(
//   "How many apples do i have in shop one?" +
//     bringMyData.deliveryFoodQuantity.shop3 +
//     bringMyData.letsCalculateOranges(1, 3)
// );
