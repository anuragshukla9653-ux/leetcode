let removeDublicatea = function(nums) {
    let j = 0;
    for ( let i = 1; i< nums.length; i++ ) {

        if ( nums[i] !==nums[j] ) {
            j++;
            nums[j] = nums[i];
        }

    }

    return ( j+1, nums.splice(0, j+1) );

}

console.log(removeDublicatea([0,0,1,1,1,2,2,3,3,4]));