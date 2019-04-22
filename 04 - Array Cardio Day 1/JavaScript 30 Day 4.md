# JavaScript 30 Day 4

remove object's property: key word **delete**

filter: go through the array, return a new array with elements that pass the test(function), and kick off the others.

```js
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

map: call a function on each element in array, return a new array

```js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```

sort: this is an **in-place and stable** sort. It will return a new array. 

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// 也可以写成：
var numbers = [4, 2, 5, 1, 3]; 
numbers.sort((a, b) => a - b); 
console.log(numbers);

// [1, 2, 3, 4, 5]
```

reduce: execute a function on each member of the array, the result of each execution will be used in the next execution. We can provide the **second parameter for reduce, which is the initial value** for the accumulator.

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

console.table: another cool way to print in the console.

Array.from: It creates a new, **shallow-copied** Array instance from an **array-like or iterable** object.

```JS
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

```

element.textContent

- **textContent** 会获取所有元素的内容，包括`<script>`和`<style>`元素，然而 **innerText** 不会。
- `innerText` 受 CSS 样式的影响，并且不会返回隐藏元素的文本，而textContent会.

querySelector can be called against other elements besides document

