function make_avg(num1, num2, num3){
    const total = num1 + num2 + num3;
    const avg = total/3;
    return avg;
}
const averAge = make_avg(5, 7, 6);
console.log(averAge);

function foo() {
  console.log("foo");
  bar();
}
foo();

function bar(){
    console.log("bar")
}
bar();

function make_avg(array, size){
    sum = 0
    for(i = 0; i < size; i++){
        sum+= array[i];
    }
    return sum / size;
}
const integersArray = [6, 12, 4, 6, 2, 8, 4];
const arraySize = integersArray.length;
const averAge = make_avg(integersArray, arraySize);
console.log(averAge);

function odd_even(array){
    if(array % 2 == 0){
    console.log('even')
    }else {
    console.log('odd')
    }
}
odd_even(7);

function odd_even(arr){
    if(arr % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
const result = odd_even(7);
console.log(`${result}`);\

let signal = "green";

switch (signal) {
  case "red":
    console.log("you in danger");
    break;
  case "yellow":
    console.log("you stop");
    break;
    case "green":
      console.log("you cross");
      break;
}

let signal = "green";

switch (signal) {
  case "red":
    console.log("Traffic signal is red. Do not cross the road. Wait for the green signal.");
    break;
  case "yellow":
    console.log("Traffic signal is yellow. Prepare to stop. Do not cross the road.");
    break;
  case "green":
    console.log("Traffic signal is green. It's safe to cross the road.");
    break;
  default:
    console.log("Invalid signal. Please enter 'red', 'yellow', or 'green'.");
}

let signal = "red";

if (signal === "red") {
  console.log("Traffic signal is red. Do not cross the road. Wait for the green signal.");
} else if (signal === "yellow") {
  console.log("Traffic signal is yellow. Prepare to stop. Do not cross the road.");
} else if (signal === "green") {
  console.log("Traffic signal is green. It's safe to cross the road.");
} else {
  console.log("Invalid signal. Please enter 'red', 'yellow', or 'green'.");
}

const signal = "green";

if(signal === "red"){
  console.log("danger here");
}
else if(signal === 'yellow'){
  console.log("stop");
}
else if(signal === 'green'){
  console.log('yous to cross');
}
else{
  console.log("red, green, naile yellow de shala");
}

const signal = "lala";

switch (signal) {
  case "red":
    console.log("danger");
    break;
  case "yellow":
    console.log("khalai ja");
    break;
  case "green":
    console.log("par ho");
    break;
  default:
    console.log("kamla red, green nahoy yellow de");
    break;
}

function isEvenOdd(num) {
  if (num % 2 == 0) 
  return "even";
  else 
  return "odd";
}

console.log(isEvenOdd(59));


function isEvenOdd (num){
  if(num % 2 == 0)
    return "even";
  else 
    return "odd"
}
console.log(isEvenOdd(13));

const binaryStr = "1010"; // Binary representation
const decimalNum = parseInt(binaryStr,2); // Parse as base 2 (binary)
console.log(decimalNum); // Output: 10


const num = "1457";
const total = parseInt(num);
console.log(total);

const num2 = "1457.354665";
const total2 = parseFloat(num2).toFixed(3);
console.log(total2);

const num = [3, 65, 4, 5, 77, 34];
const alu = num.length;
console.log(alu);


const myArray = [10, 20, 30, 40, 50];
myArray[0] = 15;
myArray[1] = 25;

console.log(myArray);

const myArray = [10, 20, 30, 40, 50];
myArray.unshift(8, 23, 556, 46, 98, 78);

// myArray.shift()
// console.log(myArray);

var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone.brand, smartphone.model);
