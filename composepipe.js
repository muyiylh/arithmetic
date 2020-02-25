
/**
 * Compose Function from right to left
 * compose(a,b,c) = (...args) => a(b(c(...args)));
 *
 * 在数学中，复合函数是指把一个函数作用于另一个函数的结果，
 * 所得到的第三個函數。例如，函數 f : X → Y 和 g : Y → Z 可以複合，得到從 X 中的 x 映射到 Z 中 g(f(x)) 的函數。
 * 直觀來說，如果 z 是 y 的函數，y 是 x 的函數，那麼 z 是 x 的函數。
 * 得到的複合函數記作 g ∘ f : X → Z，定義為對 X 中的所有 x，(g ∘ f )(x) = g(f(x))。[note 1] 直觀地說，
 * 複合兩個函數是把兩個函數連結在一起的過程，內函數的輸出就是外函數的輸入。 by: https://zh.wikipedia.org/wiki/复合函数
 *
 * compose 是从右往左计算的
 * usage:
 *  - Redux,  compose(Middleware)
 *  - React const TodoList = compose(Container, List, R.map(ListItem), items);
 *
 * @param  {Array[Function]} funcs
 * 使用reduce 函数
 */

function Compose(...funs){
    return funs.reduce((a,b)=>(...args)=>a(b(...args)));
}
//reduceRight 从右往左开始执行
function Compose1(...funs){
    return function(x){
        return funs.reduceRight((res,curr)=>{
            return curr(res);
        },x)
    }
}


/**
 * pipe Function from left to right
 * pipe(a,b,c) = (...args) => c(b(a(...args)));
 *
 * 代数计算, 符合阅读习惯, 从左到右.
 *
 *
 * @param  {Array[Function]} funcs
 */

 function pipe(...funcs){
    return funcs.reduce((a,b)=>(...args)=>b(a(...args)))
 }

 function pipe1(...funcs){
    return function(x){
        return funcs.reduce((res,curr)=>{
            return curr(res);
        },x)
    }
 }
var add = (num)=> num+3;
var multiple = (num)=> num *10;

let result = pipe1(add,multiple)(3);
console.log(result)