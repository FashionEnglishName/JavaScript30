# JavaScript30 DAY 1

querySelector / querySelectorAll

* difference with getElement(s): this can use **complicated css selector**. 

audio:

* HTML attributes: autoplay, loop, muted, **src**, volume, controls

* .**play()**, .**pause()**, .load(), duration, currentTime
* if call play() on a playing element, it doesn't work. set currentTime property to 0 can rewind the audio

css: open-quote, close-quote, **::before, ::after**

**[content](<https://developer.mozilla.org/en-US/docs/Web/CSS/content>)**: The content css property replaces an element with a generated value. 

~~~css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") " MOZILLA: " open-quote; /* no comma in between */
  font: x-small Arial, sans-serif;
  color: gray;
}
a::after {
  content: close-quote;
  font: x-small Arial, sans-serif;
  color: gray;
} 
a {
  text-decoration: none;
}
~~~

quotes

~~~css
/* <string> values */
quotes: "«" "»";           /* Set open-quote and close-quote to the French quotation marks */
quotes: "«" "»" "‹" "›";   /* Set two levels of quotation marks */
~~~

text-shadow

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black; 

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px; 

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;
```

html: kbd, q

**user defined attribute**: data-xxx. Can be get by attr(), or **element.dataset.xxx**, or **element.dataset["xxx"]**. XXX will use camel case instead of dash.

element.classList

~~~javascript
add(String) // like JQuery $().addClass
remove(String) // like JQuery $().removeClass
toggle(String[, force]) // when force exists, insert when force == true;
replace(oldClass, newClass)
contains(String)
~~~

template literal ``. Use ${} inside to use js variable

#### follow up

1. use **event** **delegation** to deal with `transitionend`
2.  Write a **function debounce**.

