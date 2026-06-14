// Merge two sorted linked lists and return the merged list head.

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return dummy.next;
}

function arrayToList(arr) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    for (let v of arr) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
}

function listToArray(node) {
    const out = [];
    while (node) {
        out.push(node.val);
        node = node.next;
    }
    return out;
}

const l1 = arrayToList([1,2,4]);
const l2 = arrayToList([1,3,4]);
const merged = mergeTwoLists(l1, l2);
console.log(listToArray(merged));