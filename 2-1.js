
// let result;
// // let newArray;
// let number;
// let stringArray;
// let string = '';
// const getItemsString = function (array) {
//     'use strict';
//     // Write code under this line
//     // console.log(array.slice());
// //     if (array === []) {
// //         string = '!!!'
// //         return;
// // }
//     stringArray = array.slice();

//     // console.log(newArray);

//     stringArray.splice(0);
    
//     for (let i = 0; i < array.length; i += 1) {
        
//         number = i + 1;

//         stringArray.push(`${number} - ${array[i]}\n`);
        
//         string = stringArray.join('');
//     }

//     result = string;
//     return result;
// };


const getItemsString = function(array) {
  'use strict';
  // Write code under this line
    let result = "";
    
    for (let i = 0; i < array.length; i += 1) {
        const number = i + 1;
        const item = array[i];
        result += `${number} - ${item}\n`;
    }
    return result;
};


console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15]));
console.log(getItemsString([]));
