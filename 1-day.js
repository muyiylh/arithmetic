/**
 * 排序算法
 *
 * 常用于Js中对数据进行排序，特别是在数据管理的时候
 */

/**
 * 冒泡排序
 *
 * 冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，
 * 一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行
 * 直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的
 * 元素会经由交换慢慢"浮"到数列的顶端。
 *
 * 可以参考：https://www.runoob.com/w3cnote/bubble-sort.html
 */

 function bubbleSort(source){
    var arr = [...source];
    var len = arr.length;
    for(var i = 0; i < len;i++){
        for(var j=0;j < len;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
 }
 var bubbleArr = bubbleSort([11,23,2,4,6,888,5]);

/**
 * 插入排序
 *
 * 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易
 * 理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 *
 * 可以参考：https://www.runoob.com/w3cnote/insertion-sort.html
 */
function insertSort(source){
    var arr = [...source];
    var len = arr.length;
    for(var i =1;i < len;i++){
        var temp = arr[i];
        var j = i;
        while(j> 0 && arr[j-1] > temp){
              arr[j] = arr[j-1];
                j--; 
        }
        arr[j] = temp;
    }
    return arr;
}
var insertResult = insertSort([1,134,56,4]);
console.log(insertResult)

