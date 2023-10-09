// function findMinimum(num){
//     let smallest = num[0];
//     for(let i = 0; i <= num.length; i++){
//         if(smallest > num[i]){
//             smallest = num[i];
//         }
//     }
//     return smallest;
// }

// const theyAre = [5, 2, 9, 1, 5, -3, -6, 0];
// const result = findMinimum(theyAre);
// console.log("Smallest is", result);

// function smallest(num1, num2, num3){
//     if(num1<num2 && num1 < num3){
//         return num1;
//     }
//     else if(num2 < num1 && num2 < num3){
//         return num2
//     }
//     else{
//         return num3;
//     }
// }

// const number1 = 900;
// const number2 = 500;
// const number3 = 300;
// const bosaiKikou = smallest(number1, number2, number3);
// console.log("Smallest among three bun is",bosaiKikou);

// function average(num){
//     let sum = 0;
//     for(let i = 0; i < num.length; i++){
//         sum = sum +num[i];
//     }
//     return sum / num.length;
// }

// const theyAre = [2,8,5,9];
// const result = average(theyAre);
// console.log("Average:",result);


// function smallest(num1, num2){
//     if(num1 <= 0 || num2 <= 0){
//         return "positive de";
//     }
//     const pailam = num1 * num2;
//     return pailam;
// }

// const num1 = 1;
// const num2 = 4;
// const bosaiKikou = smallest(num1, num2);
// console.log("area",bosaiKikou);


// function findSecondLargest(arr){
//     let largest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(largest < arr[i]){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// const theyAre = [2,3,6,7,9];
// const result = findSecondLargest(theyAre);
// console.log(result);
