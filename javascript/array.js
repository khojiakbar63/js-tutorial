// ARRAY EXERCISES:
// CONCATIONATION-1
// let arrayOne = [1, 2, 3, 4, 5];
// let arrayTwo = ['A', 'B', 'C', 'D', 'E'];
// let arrayThree = arrayOne.concat(arrayTwo);

// console.log(arrayOne);
// console.log(arrayTwo);
// console.log(arrayThree);

// CONCATIONATION-2
// let arrayFirst = [1, 2, 3];
// let arraySecond = [4, 5, 6];
// let arrayThird = [7, 8, 9];

// let numbers = arrayFirst.concat(arraySecond, arrayThird)
// console.log(numbers);

// PUSH
// let fruits = ['apple', 'banana', 'cherry'];
// fruits[3] = fruits.push('date');
// console.log(fruits);

// SECOND EXAMPLE
// let arrMax = [20, 5, 2,5,6,7,3,11,6,7];

// function findMaxElement(arrMax){
//    let max = arrMax[0];
//    for(let i = 1; i < arrMax.length; i++){
//       if(arrMax[i] > max){
//          max = arrMax[i];
//       }
//    }
//    return max;
// }
// let resultMax = findMaxElement(arrMax);
// console.log(resultMax);
// Min
// let arr = [ 20, 5, 2, 5, 6, 7, 3, 11, 6, 7 ];

// function findMinElement(arr){
//    let min = arr[0];
//    for(let i = 1; i < arr.length; i++){
//       if(arr[i] < min){
//          min = arr[i];
//       }
//    }
//    return min;
// }
// let result = findMinElement(arr);
// console.log(result);

const arrNew = [ 20, 5, 2, 5, 6, 4, 7, 3, 11, 6, 7 ];
// FUNCTION DECLARATION
function findAverage() {
   let sum = 0;
   let average
   for(let i=0; i < arrNew.length; i++){
     sum += arrNew[i] 
     average = sum / arrNew.length;
   }
  //  console.log(average);
}
findAverage();

// ARROW FUNCTION
const findAver = ()=> {
   let sum = 0;
   let average
   for(let i=0; i < arrNew.length; i++){
     sum += arrNew[i] 
     average = sum / arrNew.length;
   }
   console.log(average);
}


// ===============================================
// ARRAY USING [COPY]
const people = ['Sardor', 'Komron', 'Javlon']
const peopleCopy = [...people];
peopleCopy[3] = 'Farhod';

// console.log("Original", people);
// console.log("Copy: ", peopleCopy);

// ARRAY USING [WITH]

const pupils = ['Sardor', 'Komron', 'Javlon'];
const newPupils = pupils.with(0, "Hech kim");

// console.log(pupils);
// console.log(newPupils);

// ARRAY USING [SORT]
const fruits = ['banana', 'apple', 'cherry', 'orange', 'kiwi'];
// const sortedFruits = fruits.sort();
// const sortedFruits = fruits.toSorted();

// console.log(sortedFruits);

// ARRAY USING [SLICE]

const fruitsName = ['banana', 'apple', 'cherry', 'orange', 'kiwi'];
// fruitsName.splice(0, 2, '--/--')
const copy = fruitsName.toSpliced(0, 2, '--/--')

// console.log(copy);
// console.log(fruitsName);
