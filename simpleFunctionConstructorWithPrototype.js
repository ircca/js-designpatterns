var SimpleObject = function() {
    this.name = "Simple Object";
}

SimpleObject.prototype.print = function() {
    console.log("Print: "+ this.name);   
} 


var simple = new SimpleObject();
simple.print();