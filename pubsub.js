/**
 * 声明一个全局发布-订阅对象，为不同模块之间的可能存在的通信做铺垫
 * Observer.publish  发布消息
 * Observer.unsubscrible 取消订阅
 * Observer.subscribe  订阅
 * 
 */
const isFun = fun => typeof fun === 'function';
//发布者
class Observer {
    constructor() {
        this.events = {}
    }
    //发布消息
    publishInfo(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => {
                cb.call(this, data)
            });
        }
    }
    //订阅消息
    subscribe(eventName, callback) {
        if(!isFun(callback)){
            throw new TypeError(`callback of arguments for function ${eventName} must be a function `)
        }
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = [callback]
        }
    }
    //取消订阅
    unsubscribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
        }
    }
}

var pub = new Observer()
let a = function (...arg) {
    console.log('a', arg)
}
let b = function (...arg) {
    console.log('b', arg)
}
let c = function (...arg) {
    console.log('c', arg)
}
pub.subscribe('a', a)
pub.subscribe('a', c)
pub.subscribe('b', b)

pub.unsubscribe('a', a)
pub.publishInfo('a', "我给a 发消息")