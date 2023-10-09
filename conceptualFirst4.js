// const myName = "mehedy";
// const myAge = 25;
// const address = "Rajshahi";
// const phone = 43242423;

// console.log(myName)
// console.log(myAge)
// console.log(address)
// console.log(phone)

// function ageIsEvenOdd(age){
//     if(age % 2 === 0){
//         console.log("true")
//     }
//     else{
//         console.log("false");
//     }
// }
// ageIsEvenOdd(24);


// function hoursMinutes(hour){
//     return hour * 60;
// }
// const min = 6;
// console.log(min + " Hours = "+ hoursMinutes(min) +" Minutes");


// function leapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const isLeapYear = leapYear(2036);
//   console.log(isLeapYear);

// const name ="momin";

// const res = name.includes("in");
// console.log(res);

// const person = {
//     name:"mehedy",
//     age: 25,
//     address: "Rajshahi",
//     phone: 1234322332
// }
// const x = 'phone'
// console.log(person[x]);

// const name = {
//     nam: "mamun",
//     id: "it19026",
//     phone: '019473864855',
//     address: "pagla"
// }
// const res = Object.keys(name);
// const resu = Object.values(name);
// console.log(res);
// console.log(resu);

// const person = {
//     name:"mehedy",
//     age: 25,
//     address: "Rajshahi",
//     phone: "1234322332"
// }

// for(let i in person){
//     console.log(typeof i, i)
//     console.log(person[i])
// }

// const arr = [1,2,3,4,5]
// console.log(arr.splice(1,2))
// console.log(arr)

// function printInfo(name){
//      console.log("good night",name);
//  }
//  const x = ("gandu");
//  printInfo(x);

// function add(x,y){
//     var total = x + y;
//     return total;
// }
// const alu = add(3,4);
// console.log(alu);

// 1. no parameters + no return
// 2. parameters + no return
// 3. no parameters + return
// 4. parameters + return

// function show(){
//     console.log('hello')
// }
// show();

// function giveMoney(){
//     const money = 500;
//     return money / 100;
// }
// console.log(giveMoney());

// function multi(a,b){
//     const res = a*b;
//     return res;
// }
// const ok = multi(6,7);
// console.log(ok);

// function sumOfSomeArray(numbers){
//     let sum = 0;
//     for(i = 0; i < numbers.length; i++){
//         // sum = sum + numbers[i];
//         sum += numbers[i];
//     }
//     return sum;
// }
// const num = [1,6,8,9];
// const result = sumOfSomeArray(num);
// console.log(result);

// function sumOfOdds(arr){
//     let sum = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 === 1){
//             sum = sum + arr[i];
//             // sum +=arr[i]
//         }
//     }
//     return sum;
// }
// const numbers = [1,6,3,7,9];

// const total = sumOfOdds(numbers)
// console.log(total)

// function sumOfOdds(number){
//     let sum = 0;
//     for(i = 0;i < number.length; i++){
//         if(number[i] % 2 ==1){
//             sum =sum + number[i];
//         }
//     }
//     return sum;
// }
// const theyAre = [1,3,3,5,8];
// const result = sumOfOdds(theyAre);
// console.log(result);

// function information(info){
//     const sentence = "amar nam "+info.name+", amar bari "+info.address+", amar boyos "+info.age;
//     return sentence
// }


// const myInfo= {
//     name: "mehedy",
//     age: 56,
//     address: "Rajshahi"
// }
// console.log(information(myInfo))

// function information(info){
//     const sentence = "amar name "+info.name+" amar boyos "+info.age+" amar bari "+info.home;
//     return sentence;
// } 

// const myInfo= {
//     name: "mamun",
//     age: 25,
//     home: "Tangail"
// }
// const pagla = information(myInfo)
// console.log(pagla);


// factorial

// 5! = 5*4*3*2*1 = 120
// 1! = 1
// 0! = 1

// const number = 5;
// let result = 1;

// for(let i = number; i>=1; i-- ){
//     result = result * i;
// }

// console.log(result);

// function factorial(number){
//     if(number === 0 || number === 1){
//         return 1;
//     }
//     let result = 1
//     for(let i = number; i>=1; i-- ){
//             result = result * i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(0));

// function findLargest(x){
//     let largest = x[0];

//     for(let i = 1; i<x.length; i++){
//         if(x[i] > largest){
//             largest = x[i];
//         }
//     }
//     return largest;
// }

// const arr = [2,5,13,5,20,3,50];
// console.log(findLargest(arr));

// function findLargest(x){

//     let largest = x[0];
//     for(let i= 1;i<x.length; i++){
//         if(x[i]> largest){

//             largest = x[i];
//         }
//     }
//     return largest;
// }

// const num = [3,5,2,876,43,342,56,3532,244,544];
// console.log(findLargest(num));

// function biggestName(x){
//     let biggest = x[0];
//     for(let i = 1; i < x.length; i++){
//         if(x[i].length> biggest.length){
//             biggest= x[i];
//         }
//     }
//     return biggest;
// }

// const friends = ["kalam", "Salar Malur Pola", "Mosaddek Hossain", "Lallu", "Kallu", "Madhuridix"];
// console.log(biggestName(friends));
