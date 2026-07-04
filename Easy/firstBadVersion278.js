var solution = function(isBadVersion) {

    return function(n) {

        let left = 1;
        let right = n;

        while (left < right) {

            let mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }

        }

        return left;
    };
};

console.log("First Bad Version");
console.log(solution((version) => version >= 4)(5));
console