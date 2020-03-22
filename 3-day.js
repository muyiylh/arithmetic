/**
 * 树 & 图
 *
 * 在前端世界中，DOM、Virtual DOM都是棵树， 文件依赖管理是个图。
 * 掌握了树和图的算法，能够帮助更好地理解前端框架。
 */

/**
 * Floyd判圈算法
 *
 * Floyd判圈算法(Floyd Cycle Detection Algorithm)，又称龟兔赛跑算法
 * (Tortoise and Hare Algorithm)，是一个可以在有限状态机、迭代函数或者
 * 链表上判断是否存在环，求出该环的起点与长度的算法。
 *
 * 在图和树的数据结构在具体使用中，可能会出现循环依赖的情况，如何自动判断
 * 是否存在循环，可以使用Floyd判圈算法
 *
 * 参考： https://leetcode-cn.com/problems/linked-list-cycle/
 */
const floyd = head => {
    let arr=[];
    let index=0 ;
    while(head !==null){
        if(arr.includes(head)){
            index =  arr.findIndex(item=>item.value === head.value);
            break;
        }else{
            arr.push(head);
        }
        head = head.dep;
    }
    return index;
};



const c = {
    value: -4
  };
  
  const b = {
    value: 0
  };
  
  const a = {
    value: 2
  };
  
  const head = {
    value: 3
  };
  
  head.dep = a;
  a.dep = b;
  b.dep = c;
  c.dep = a;
  const index = floyd(head);
  console.log(index);
