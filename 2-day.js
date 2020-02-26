/**
 * 链表
 *
 * 在React中的Fiber中采用链表树的数据结构来解决主线程阻塞的问题，
 * 我们一起来试着遍历一个简单的链表结构试试
 */

/**
 * 遍历链表数据结构
 */
const NodeD = {
    value: 4,
    next: null
  };
  
  const NodeC = {
    value: 3,
    next: NodeD
  };
  
  const NodeB = {
    value: 2,
    next: NodeC
  };
  
  const NodeA = {
    value: 1,
    next: NodeB
  };
  
  const LinkedList = {
    head: NodeA
  };
  //获取
var total = 0;
function findNode(value){
    total +=value;
}
 function traversal(linkedList, callback) {
     (linkedList.head || linkedList.next) && traversal(linkedList.head || linkedList.next,callback);
     var val = linkedList.value ? linkedList.value:0;
     callback(val);
    // let head = linkedList.head;
    // while(head.next !==null){
    //     callback(head.value);
    //     head = head.next;
    // }
    // if(head.next ===null){
    //     callback(head.value);
    // }

 }
 
 traversal(LinkedList,findNode);
 console.log('total ;',total)
