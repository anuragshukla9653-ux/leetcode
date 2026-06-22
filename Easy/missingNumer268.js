var missingNumber = function(nums) {

    let n = nums.length;

    let expected = n * (n + 1) / 2;

    let actual = 0;

    for(let num of nums){

        actual += num;
    }

    return expected - actual;
};

console.log(missingNumber([3,0,1]));