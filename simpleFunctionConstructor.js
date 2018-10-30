var SimpleObject = function() {
    this.name = "Simple Object"; 
    this.print = function() {
        console.log("Print: "+ this.name);   
    }
}

var simple = new SimpleObject();
simple.print();