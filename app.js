// Array left Rotation

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function rotateArrayLeft(array, d, n) {
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(array[i]);
  }

  //   rest of array forward moved
  for (let i = 0; i < n - d; i++) {
    array[i] = array[d + i];
  }
  let j = 0;
  for (let i = n - d; i < n; i++) {
    array[i] = temp[j];
    j++;
  }
}

rotateArrayLeft(myArray, 2, myArray.length);
console.log(myArray);
