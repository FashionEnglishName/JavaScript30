# JavaScript 30 Day 7

####Array.prototype.some. 

Do a test on each element in the array. If **one element can pass the test, return true**. All can't pass the test, return false.

#### Array.prototype.every

Do a test on each element in the array. If **all elements can pass the test, return true**. Exists one element can't pass the test, return false.

#### Array.prototype.find

Return the **first** element in the array that matches the condition.

#### Array.prototype.findIndex

Return the index of the **first** element in the array that matches the condition.

#### Two way to delete a element with index in array

```js
 const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 823423 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
// 1. in place
comments.splice(index, 1);

// 2. keep origin data
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
```

