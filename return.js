// function add(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }

// var total = add(2, 5);
// console.log(total);

// function getAverage(assignment1, assignment2, assignment3){
//     const total = assignment1 + assignment2 + assignment3;
//     const avg = total / 3;
//     return avg;
// }

// const dhun = getAverage(5, 9, 10);
// console.log(dhun);

function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}
const assignment1Marks = 10;
const assignment2Marks = 9;
const assignment3Marks = 5;

const paglaAvg =getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(paglaAvg);