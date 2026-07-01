class MinStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);

        if (this.q2.length === 0 || x <= this.q2[this.q2.length - 1]) {
            this.q2.push(x);
        }
    }

    pop() {
        if (this.q1.length === 0) return;

        if (this.q1[this.q1.length - 1] === this.q2[this.q2.length - 1]) {
            this.q2.pop();
        }

        this.q1.pop();
    }

    top() {
        if (this.q1.length === 0) return -1;
        return this.q1[this.q1.length - 1];
    }

    getMin() {
        if (this.q2.length === 0) return -1;
        return this.q2[this.q2.length - 1];
    }
}

MinStack.prototype.push = function(x) {

    this.q1.push(x);

    if ( this.q2.length === 0 || x <= this.q2[ this.q2.length - 1 ] ) {

        this.q2.push(x);

    };

};

MinStack.prototype.pop = function() {

    if ( this.q1.length === 0 ) return;

    if ( this.q1[ this.q1.length - 1 ] === this.q2[ this.q2.length - 1 ] ) {

        this.q2.pop();

    }

    this.q1.pop();

};

MinStack.prototype.top = function() {

    if ( this.q1.length === 0 ) return -1;

    return this.q1[ this.q1.length - 1 ];
    
};

MinStack.prototype.getMin = function() {

    if ( this.q2.length === 0 ) return -1;

    return this.q2[ this.q2.length - 1 ];

};

console.log("Min Stack");
console.log("Input: push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()");
console.log("Output: ");
var obj = new MinStack();
obj.push(-2);
obj.push(0);    
obj.push(-3);
console.log("Get Min:", obj.getMin());
obj.pop();
console.log("Top:", obj.top());
console.log("Get Min:", obj.getMin());

