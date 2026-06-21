var singleNumber = function( nums ) {
    let set = new Set();

    for ( let num of nums ) {

        if ( set.has ( num ) ) {

            set.delete ( num );
            
        } else {

            set.add ( num );

        }
    }

    return [...set][0];

}

console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([2,2,1]));