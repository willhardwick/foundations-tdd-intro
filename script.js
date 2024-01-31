// --------------------------
//#region Section 1
// --------------------------
/**
 * @param {number} num1
 * @param {number} num2
 * @returns the sum of the two given numbers
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns the difference between the two given numbers
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * @param {string} name
 * @returns a string that greets the given name.
 * If a name is not provided,
 * then a generic greeting will be returned.
 */
function greet(name) {
  if (typeof name === "undefined") {
    return "Hello!";
  } else {
    return `Hello, ${name}!`;
  }
}

/**
 * @param {int[]} nums
 * @returns the sum of the numbers in the given array of numbers
 */
function sum(nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

//#endregion Section 1

// --------------------------
//#region Section 2
// --------------------------
// Write your code here!
function isPositive(num){
  if (num > 0) {
    return true
  } 
  else {
    return false
  }
}

// getFirst
function getFirst(arrOfelement) {
  return arrOfelement[0];
}

// getLast
function getLast(arrOfelement) {

  if (arrOfelement.length === 0) {
    return null;
  }
  return arrOfelement[arrOfelement.length -1]
}


// shareFirstLetter (must return boolean)
function shareFirstLetter(word1, word2) {
  let firstLetterOfword1 = word1.charAt(0);
  let firstLetterOfword2 = word2.charAt(0);

  if (word1 === "" || word2 === "")
  return false;

  if (firstLetterOfword1 === firstLetterOfword2) {
    return true
  } else {
    return false;
  } 

}

// V Dax's solution V
// function shareFirstLetter(a, b) {
// if (a === "" || b === "") {
//   return false
// }

//   // get the first leter of each string
//   const firstA = a.charAt(0)
//   const firstB = b.charAt(0)

//   return firstA === firstB

//   // or
//   // return a.charAt(0) === b.charAt(0)
//   // return firstA === firstB
// }



// getFirstLast
function getFirstLast(arrOfString) {
  let first = arrOfString[0];
  let last = arrOfString[arrOfString.length -1];
  return [first, last];
}

// shareLastDigit
function shareLastDigit(num1, num2) {
  let lastDigit1 = num1 % 10;
  let lastDigit2 = num2 % 10;
  if (lastDigit1 === lastDigit2) {
    return true
  } else {
    return false
  }
}
// ^ *other solution: return lastDigit1 === lastDigit2;
// === is equivalent to a boolean here in js,
// if it's true, it returns true
// if it's false, if it returns false

// findLeast
function findLeast(num1, num2, num3) {
  let least = Math.min(num1, num2, num3);
  return least;
}

//#endregion Section 2

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  add,
  subtract,
  greet,
  sum,
  isPositive,
  getFirst,

  getLast,
  findLeast,
  shareFirstLetter,
  getFirstLast,
  shareLastDigit,
};
