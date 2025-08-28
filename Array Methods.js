let nums = [1, 2, 3, 4, 5];

// 1. push() → Add to end
nums.push(6);
console.log(nums); // [1, 2, 3, 4, 5, 6]

// 2. pop() → Remove from end
nums.pop();
console.log(nums); // [1, 2, 3, 4, 5]

// 3. shift() → Remove from start
nums.shift();
console.log(nums); // [2, 3, 4, 5]

// 4. unshift() → Add to start
nums.unshift(0);
console.log(nums); // [0, 2, 3, 4, 5]

// 5. map() → Transform each element
let doubled = nums.map(num => num * 2);
console.log(doubled); // [0, 4, 6, 8, 10]

// 6. filter() → Keep elements that pass condition
let evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [0, 2, 4]

// 7. forEach() → Loop over array
nums.forEach(num => console.log(num)); // logs each number

// 8. find() → Get first match
let found = nums.find(num => num > 3);
console.log(found); // 4

// 9. reduce() → Accumulate into single value
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 14

// 10. includes() → Check if value exists
console.log(nums.includes(3)); // true

// 11. slice() → Copy portion
let sliced = nums.slice(1, 3);
console.log(sliced); // [2, 3]

// 12. splice() → Add/remove items in place
nums.splice(2, 1, 99); // remove 1 at index 2, add 99
console.log(nums); // [0, 2, 99, 5]

// 13. sort() → Sort array
let randomNums = [5, 1, 4, 2];
randomNums.sort((a, b) => a - b); // ascending
console.log(randomNums); // [1, 2, 4, 5]

// 14. reverse() → Reverse array
randomNums.reverse();
console.log(randomNums); // [5, 4, 2, 1]
