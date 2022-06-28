// medium java challenges

// given two values, return the first one if it's falsy, otherwise return the second value.

function falsyOrTruthy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}

console.log(falsyOrTruthy(null, 5))

// given an array return its length

function arrLength(arr){
    return arr.length;
}

console.log(arrLength([1, 2, 3, 4]))

// given an array return its last element 

function lastElement(arr) {
    return arr[arr.length - 1]
}

console.log(lastElement([1, 2, 3, 4]))

// given an array, return the sum of every element

function arrSum(arr) {
    let sum = 0
    for (let i = 0; 1 < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum;
}

console.log(arrSum([2, 2, 2]))

// given a number, add up all the numbers from 1 to the number given 

function progressiveSum(num) {
    let sum = 0
    for (let i = 0; i <= num; ++i) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum(5))

//given a number in seconds, return this number in mm:ss format

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1){
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(130))

// given an array of numbers, return the largest number of that array

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(getMax([-100, -200, -300]))

// given a string, return the reversed string

function reverseString(str) {
    let reversedString = '';
    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(reverseString('abc'))

// turn every element in an array into 0's

function convertToZeros(arr) {
   // return new Array(arr.length).fill(0);  (array fill)
    return arr.map(elem => 0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//given an array of fruits, remove apple from array 

function removeApples(arr) {
    // return arr.filter(elem => elem !== 'Apple')
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i]);
        }
    }
    return noApples 
    
}

console.log(removeApples(['Banana', 'Orange', 'Apple']))

//given an array of values, filter out all the falsy values

function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem == true)
}

console.log(filterOutFalsy(['', NaN, null, false, true]))

//given an array of truthy and falsy values, return the same array of elements into its boolean value

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean(['', NaN, null, false, true]))

 