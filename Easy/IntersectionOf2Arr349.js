var intersection = function ( a, b ) {

    let set = new Set( a );
    let result = [];

    for (let i = 0; i < b.length; i++ ) {

        if ( set.has ( b[i] ) ) {

            result.push( b[i] );
            set.delete( b[i] );

        }
    }

    return result;

}

console.log(intersection([1,2,2,1], [2,2]));