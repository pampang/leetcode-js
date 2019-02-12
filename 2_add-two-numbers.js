/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  const startNode = new ListNode();
  let currentNode = startNode;
  let carry = 0;
  let currentL1 = l1;
  let currentL2 = l2;

  while (true) {
    console.log(currentL1.val);
    let sum = (currentL1.val || 0) + (currentL2.val || 0) + carry;

    // 复位进位
    carry = 0;

    // 计算是否还有进位
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    // 写入值到节点中
    currentNode.val = sum;

    // 继续下一个计算

    currentL1 = currentL1.next ? currentL1.next : {};
    currentL2 = currentL2.next ? currentL2.next : {};
    if (typeof currentL1.val === 'number' || typeof currentL2.val === 'number') {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    } else {
      if (carry) {
        currentNode.next = new ListNode(carry);
      }
      break;
    }
  }
  return startNode;
};

addTwoNumbers({
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
}, {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
})

/**
 * 输入
 * [5]
 * [5]
 * 输出
 * [1,0]
 */

/**
 * 输入
 * [6,4,5,0,4,4,9,4,1]
 * [3,8,8,0,3,0,1,4,8]
 * 输出
 * [9,2,4,1,7,4,0,9,9]
 */