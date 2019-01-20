Read the blog posts at
- http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/
- //https://hackernoon.com/prototypes-in-javascript-5bba2990e04b

My key learning takeaways were
```
/* KEY LEARNING POINTS 
- The prototype is good place to store shared functions / data for objects.
- The prototype depends on the definition of the object...
  - Object literal / new Object? -> prototype = object.prototype
  - function? -> prototype = constructor (how you defined the function)
  - And there will probably be a __proto__ object tagged on there as well.
- When searching for an object property, it starts with the object then follows the prototype chain.
- this in global context references the window object, else it's local context specific.
*/
```

You can see the full notes at
https://codepen.io/jhancock532/pen/QzezjQ?editors=0012
