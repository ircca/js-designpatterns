# js-designpatterns

## Construct new objects from functions: 

The `new` keyword in front of a function call will create a new object. It links the object to an object prototype. Binds `this` to the new object scope. It implicitly returns this.

```
var SimpleObject = function() {
    this.name = "Simple Object"; 
    this.print = function() {
        console.log("Print: "+ this.name);   
    }
}

var simple = new SimpleObject();
simple.print();

```
Drawback this approach: function print is recreated for each new object. 

We can do better!

### Linking Prototypes
A prototype is an encapsulation of properties that an object links to. For every copy of object it links to just one prototype.

```
var SimpleObject = function() {
    this.name = "Simple Object";
}

SimpleObject.prototype.print = function() {
    console.log("Print: "+ this.name);   
} 

var simple = new SimpleObject();
simple.print();
```
## 





