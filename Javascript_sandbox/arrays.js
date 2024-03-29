// Create some arrays

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();
const integers = [98,56,345,87,5,76,91,123,43];
integers.sort();
console.log(integers);
// comparison function needed to sort numerically
integers.sort((a,b)=>a-b);
// https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958

// Use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;
})

// Reverse sort
val = numbers.sort(function(x, y){
    return y - x;
})

// Find
function under50(num){
    return numbers < 50;
}




console.log(numbers);
console.log(val);
console.log(integers);