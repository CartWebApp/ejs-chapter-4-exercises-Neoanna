

function range(start, end, step = 1) {
const arrayNumbers = ['1','2','3','4','5','6','7','8','9','10'];
for( let start = 0; start < arrayNumbers.length; start++) {
  console.log(arrayNumbers[start])
}
}

function sum(numbers) {
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++){
  sum += arrayNumbers[i];
}
}






// tests       (start,end)  
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55