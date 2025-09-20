// function isInteger(num){
//     if(typeof num !== 'number'){
//         return "enter valid num";
//     }
//     if(num % 1 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isInteger(2));

/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

// function findingBadData(arr){
//     if(!Array.isArray(arr)){
//         return "please array de";
//     }
//     else{
//         let badData = 0;
//         for(let i = 0; i < arr.length; i++){
//             if(typeof arr[i] !== "number"){
//                 return "array onno kicu disos ke number de shuyor";
//             }
//             else{
//                 if(arr[i] < 0){
//                     badData +=1;
//                 }
//             }
//         }
//         return badData;
//     }
// }
// const dhun  = [1,4, -2, -5, -6];
// const kana = findingBadData(dhun);
// console.log("badData:", kana);


/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/


// function gemsToDiamond(x,y,z){
//     if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
//         return "enter valid number"
//     }else if(x < 0 || y < 0 || z < 0){
//         return "enter positive number"
//     }else if(x % 1 !== 0 || y%1 !== 0 || z%1 !== 0){
//         return "dosomik dis na";
//     }
//     else{
//         const total = (x * 21) + (y * 32) + (z * 43);
//         console.log("bad deyar agga:",total);
//         if(total > 2000){
//             return total - 2000;
//         }
//         else{
//             return total;
//         }
//     }
// }

// console.log(gemsToDiamond(20, 200, 50))


// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);


// Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 


// function printDetails(person){
//     if(typeof person !== 'object'){
//         return "object deo"
//     }else{
//         const nam = person.name || "nai";
//         const boyos = person.age || "nai";
//         const email = person.email || "nai";
//         const bou = person.bou || "nai";
//         return 'Amar nam: '+nam+ '. amar boyos: '+boyos+ '. amar email: '+email+'. amar bou: '+bou;
//     }
// }

// const obj = {
//     name: "Momin",
//     age:24,
//     email:"abc@gmail.com",
//     bou: "kona"
// }

// console.log(printDetails(obj));




/*
Problem 1:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।

*/

// ".jpg",".JPEG",".png",".gif",".ico"

// function isValidPhotoName(photoName, imageExtension){
//     if(typeof photoName !== "string" || !Array.isArray(imageExtension)){
//         return "jontropati thik moto dao";
//     }else{
//         for(let gua of imageExtension){
//             if(photoName.toLowerCase().endsWith(gua.toLowerCase())){
//                 return true;
//             }
//         }
//         return false;
//     }
// }

// const nameP = "guagua.PNg";
// const extension = [".jpg",".JPEG",".png",".gif",".ico"];
// console.log(isValidPhotoName(nameP, extension));


/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 

*/

function findPrimeNumbers(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of numbers"
    }else{
        
        // 0,1 can not be prime number
        let primes = [];
        for(let item of arr){
            if(item > 1){ //4 
                let isPrime = true;

                for(let i = 2; i< item; i++){ 
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primes.push(item)
                }
            }

        }
        return primes
    }

}

const numbers = [2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 29, 31, 33, 35, 37, 39, 41, 43, 45]

console.log(findPrimeNumbers(numbers))
