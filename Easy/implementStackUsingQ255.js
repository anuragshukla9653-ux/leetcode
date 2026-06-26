var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
}

MyStack.prototype.push = function(x) {

    this.q1.push(x);

    while ( this.q2.length ) {
        this.q1.push(this.q2.shift());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
}

MyStack.prototype.pop = function() {
    return this.q2.shift();
}

var stack = new MyStack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.pop());
