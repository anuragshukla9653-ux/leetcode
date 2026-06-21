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

// var singleNumber = function ( nums ) {
    
//     let map = {};

//     for ( let i = 0; i < nums.length; i++ ) {

//         if ( map.hasOwnProperty ( nums[i] ) ) {

//            delete map [ nums [i] ];

//         } else {

//             map [ nums [i] ] = i;

//         }

//     }

//     return Number(Object.keys(map)[0]);

// };


// var singleNumber = function(nums){

//     let map = {};

//     for(let num of nums){

//         map[num] = (map[num] || 0) + 1;
//     }

//     for(let key in map){

//         if(map[key] === 1){

//             return Number(key);
//         }
//     }
// };