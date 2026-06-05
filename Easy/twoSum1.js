// let nums = [2, 7, 11, 15];
// let target = 9;

two_sum = function (nums, target) {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (result.hasOwnProperty(complement)) {
            return [result[complement[i], i]];
        }
        else {
            result[nums[i]] = i;
        }
    }
}
console.log(two_sum([2, 7, 11, 15],9));
