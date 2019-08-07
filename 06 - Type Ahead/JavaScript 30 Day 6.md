# JavaScript 30 Day 6

#### promise

ES6 has a new way to deal with asynchronous programming — Promise.



#### fetch

`fetch` is an alternative way to fetch data asynchronously(before we use XMLHttpRequest).

It has two parameter. The first one is url. The second one is optional, it's an `object` to control settings.

```js
postData(`http://example.com/answer`, {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}
```

`fetch` will return a`Response` object. [see more](<https://developer.mozilla.org/en-US/docs/Web/API/Response>)

Mostly we will use properties and methods in `Response` are

```js
const response = new Response();

response.json(); //It returns a promise that resolves with the result of parsing the body text as JSON.

response.text(); //It returns a promise that resolves with a text.


response.ok;
```

##### An example about uploading a file using `fetch`

```js
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
	.then(response => response.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', JSON.stringify(response)));
```

see [more examples](<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>)

##### A common error

> Uncaught (in promise) TypeError: Failed to execute 'json' on 'Response': body stream is locked

I met this error too but found out it is not related to the state of Response, the real problem is that you only can consume `Response.json()` once, if you are consuming it more than once, the error will happen.

Response method like 'json', 'text' can be called once, and then it locks. 

#### …spread

New operator in ES6 `…`. It can spread an array. We usually use it to copy array, or passing parameter into function.

```js
let arr1 = [1,2,3,4,5];
let arr2 = [
  // remove the fourth element
  ...arr1.slice(0, 3),
  ...arr1(4);
]
```

#### How to put variable in Regular Expression?

In JavaScript we can use regular expression like this

```js
const regex = /\^\d+$\/;
```

But it won't work if we need to put variable in it. To solve it, we can create Regular Expression object.

```js
syntax: new RegExp(pattern [, flags])

const regex = new RegExp("\\w+", "ig");
```

* i: case insensitive
* g: global match 

Then we can use

```js
string.match(regex);
```

to match string

```js
function findMatches(wordsToSearch, cities) {
    const regex = new RegExp(wordsToSearch, "ig");
    return cities.filter(place => place.city.match(regex) || place.state.match(regex));
}
```