var isSymmetric = function(root) {

    let queue = [];

    queue.push(root.left);
    queue.push(root.right);

    while(queue.length){

        let left = queue.shift();
        let right = queue.shift();

        if(left === null && right === null){
            continue;
        }

        if(left === null || right === null){
            return false;
        }

        if(left.val !== right.val){
            return false;
        }

        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(right.left);
    }

    return true;
};

console.log("Symmetric Tree");
let tree1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null,
        }
    },
    right: {   
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
};

console.log(isSymmetric(tree1));
