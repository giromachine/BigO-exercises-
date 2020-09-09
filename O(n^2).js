// Log all pairs of arrays
const boxes = [1,2,3,4,5];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      console.log(array[i],array[j]);
    }
  }
}

logAllPairs(boxes); // O(n^2) Quadratic Time