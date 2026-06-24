let fibonacci = function (n) {

    if ( n <= 1 ) {
        return n;
    }

    let a = 0; 
    let b = 1;

    for ( let i = 2; i <= n; i++ ) {

        let c = a + b;
        a = b;
        b = c;
    }
    // return fibonacci(n - 1) + fibonacci(n - 2);

    return b;

}

console.log(fibonacci(5));
console.log(fibonacci(10));