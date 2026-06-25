let isPalindrome = function (x) {

    if ( x < 0 ) return false;

    let str = x.toString();
    let revstr = ("");

    for ( let i = str.length - 1; i >= 0; i-- ) {

        revstr += str[i];

    }

    return str === revstr;

}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));  