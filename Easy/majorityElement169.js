var majorityElement = function(nums) {

    let map = {};
    let maxCount = 0;
    let majorityElement;

    for ( let i = 0; i < nums.length; i++ ) {

        if ( map.hasOwnProperty(nums[i]) ) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }

        if ( map[nums[i]] > maxCount ) {
            maxCount = map[nums[i]];
            majorityElement = nums[i];
        }
    }

    return majorityElement;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

// var majorityElement = function (nums) {

//     let map = {};
//     let maxCount = 0;
//     let majorityElement;

//     for ( let i = 0; i < nums.length; i++ ) {

//         map[nums[i]] = (map[nums[i]] || 0) + 1;

//         if(map[nums[i]] > maxCount){

//             maxCount = map[nums[i]];

//             majorityElement = nums[i];
//         }
//     }

//     return majorityElement;
// };