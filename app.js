// Array left Rotation

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function rotateArrayLeft(array, elements, n) {
  let temp = [];
  for (let i = 0; i < elements; i++) {
    temp.push(array[i]);
  }

  //   rest of array forward moved
  for (let i = 0; i < n - elements; i++) {
    array[i] = array[elements + i];
  }
  let j = 0;
  for (let i = n - elements; i < n; i++) {
    array[i] = temp[j];
    j++;
  }
}

console.log(`Array before Rotation ${myArray}`);
rotateArrayLeft(myArray, 2, myArray.length);
console.log(`Array after Rotation  ${myArray}`);
