function urlify(str) {
  return str.trim().replace(/\s/g, "%20");
}

console.log(urlify("https://www.hello world .com"))

function filterArray (arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const item = arr.shift();
    if (item >= 5) arr.push(item);
  }
  return arr;
}

console.log(filterArray([10, 20, 5, 3, 2, 15, 5]))

function max(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

console.log(max([4, 6, -3, 5, -2, 1]));

function merging(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr.sort((a,b) => a-b);
}
console.log(merging([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

function removeVowels(str) {
  return str.replace(/[aeiou]/, '')
}

console.log(removeVowels('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

function products(arr) {
  let prod = arr.reduce((prod, num) => (prod *= num), 1);
  const newArr = arr.map(num => prod / num);
  return newArr;
}

console.log(products([1, 3, 9, 4]))

const grid =
   [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];

function zeros(array) {
  const columns = [];
  const rows = [];

  for (let i=0; i<array.length; i++) {
    if (array[i].includes(0)) rows.push(i);
  }
  for (let num in rows) {
    for (let j = 0; j < array[num].length; j++) {
      if (array[num][j] === 0 && !columns.includes(0)) {
        columns.push(j);
      }
    }
  }

  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (columns.includes(x) || rows.includes(y)) {
        array[y][x] = 0;
      }
    }
  }

  return array;
}
console.log(zeros(grid));

function strRot(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    str2 = str2.slice(1) + str2[0];
    if (str1 === str2) {
      return true;
    }
  }
  return false;
}

console.log(strRot("amazon", "azonam"));
