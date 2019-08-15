## Day15

#### CSS

* customize checkbox image:

  ```css
  .plates input {
    display: none;
  }
  
  .plates input + label:before {
    content: '⬜️';
    margin-right: 10px;
  }
  
  .plates input:checked + label:before {
    content: '🌮';
  }
  ```

  

