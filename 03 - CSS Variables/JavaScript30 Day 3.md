# JavaScript30 Day 3

**CSS variable**: use double dash to define 

```css
:root { /* same as html tag */
  --variableName: xxx
}
```

To use it

```css
a {
  margin: var(--variableName)
}
```

 It is same as CSS attributes. It has scope: the closer will win out.



You can set an input `type = color`, to call a **color picker** when you click the input



filter: 

```css
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);
```



the return  value of querySelectorAll **is not an array. Its a nodeList**



```javascript
element.style.setProperty(name[, value]) // set css value
element.style.getPropertyValue(name) // get css value
// you will need this when you try to get css variables
```



**documentElement** return the root element(like <html>) in the document



#### follow up

1. write a throttle function on "mousemove" event

