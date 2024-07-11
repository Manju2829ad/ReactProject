// var arr = [100, 2, 2, 3, 3, 4, 500, 6, 6, 100, 8, 8, 9];

// // Create an object to store frequencies
// const frequencyMap = {};

// // Iterate through the array and update frequencies
// arr.forEach((number) => {
//     // console.log(frequencyMap[number]);

//   frequencyMap[number] = (frequencyMap[number] || 0) + 1;
// });

// // Print the frequency of each number
// console.table(frequencyMap);


// // let arra =[2,5,5,9,8,5]


// // let obj={};


// // console.log(obj[arra.map(number)])



var arr1=[0,1,5,3,5,6,7,8,9]


function findMissingNumbers(arr) {
    const max_value = Math.max(...arr);
    const all_numbers = new Set(Array.from({length: max_value + 1}, (_, i) => i));
    const missing_numbers = new Set([...all_numbers].filter(x => !arr.includes(x)));
    return missing_numbers;
  }
  
  const arr = [0, 1, 4, 5, 3, 6, 3, 7, 8, 9, 55, 88];
  const missingNumbers = findMissingNumbers(arr);
  console.log("Missing numbers:", missingNumbers);
  



// let missingNUmber={};

// for(i=0;i<arr.length;i++){




//      }
        





