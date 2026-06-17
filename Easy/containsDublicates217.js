var containsDublicate = function ( nums ) {

    let map = {};

    for ( let i = 0; i < nums.length; i++ ) {

        if ( map.hasOwnProperty (nums[i] ) ) {
            return true;
        } 
        
        else {
            map[nums[i]] = true;
        }
    }

    return false;

}

console.log(containsDublicate([1,2,3,1]));