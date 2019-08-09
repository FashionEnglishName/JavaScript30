## Day10

#### Collections

* An array has both `forEach` and `map`, while a nodeList only has `forEach`. HtmlCollection has neither.
* Never use `for in` on a HtmlCollection, because `for in` will iterate all iterable elements(*including children*) in the collection. Instead, `for of` is a good choice.

#### event

* e.shiftKey.       Boolean

