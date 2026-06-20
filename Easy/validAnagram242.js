var validAnagram = function( s, t ) {

    if ( s.length !== t.length ) {

        return false;

    }

    let map = {};

    for ( let char of s ) {

        map[ char ] = ( map[ char ] || 0) + 1;

    }

    for ( let char of t ) {

        if ( !map[ char ] ) {

            return false;

        }

        map[ char ]--;

    }

    return true;

}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));

// var isAnagram = function(s, t) {
//     let arr = [...s];

//     for ( let char of t ) {

//         let index = arr.indexOf ( char );

//         if ( index === -1 ) {
//             return false;
//         }

//         arr.splice(index,1)

//     }

//     return arr.length === 0;

// };