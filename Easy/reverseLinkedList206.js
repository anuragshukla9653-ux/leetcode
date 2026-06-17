function ListNode(val, next = null ) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {

    let dummy = new ListNode(-1);

    let curr = dummy;

    for(let num of arr) {

        curr.next = new ListNode(num);

        curr = curr.next;
    }

    return dummy.next;
}

var reverseList = function( head ) {

    let prev = null;
    let curr = head;

    while ( curr ) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;

}

function printList(head) {

    let arr = [];

    while(head) {

        arr.push(head.val);

        head = head.next;
    }

    console.log(arr);
}

let head = arrayToList([1,2,3,4,5]);

printList(head);

let reversed = reverseList(head);

printList(reversed);
