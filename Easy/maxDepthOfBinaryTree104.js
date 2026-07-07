var maxDepth = function(root) {

    if(root === null) return 0;

    let queue = [root];
    let depth = 0;

    while(queue.length > 0){

        let size = queue.length;

        for(let i = 0; i < size; i++){

            let node = queue.shift();

            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }

        }

        depth++;
    }

    return depth;
};

console.log("Max Depth of Binary Tree");
let tree1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

console.log(maxDepth(tree1)); // Output: 3