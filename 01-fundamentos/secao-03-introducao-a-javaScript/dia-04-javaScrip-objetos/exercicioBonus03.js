let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  let result = [];

  for (let index = 0; index < vector.length; index += 1) {
    let numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      let current = numbers[indexSub];

      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }

  return result;
}

console.log(arrayOfNumbers(vector));
console.log(arrayOfNumbers(vector));