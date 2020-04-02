function Watcher(vm,exp,cb){
    console.log(vm,cb,exp)
    this.cb = cb
    this.vm = vm
    this.exp = exp
    this.value = this.get()//将自己添加到订阅器中

}
Watcher.prototype ={
    update:function(){
        this.run();
    },
    run:function(){
        var value = this.vm.data[this.exp]
        console.log("value,",value)
        var oldVal = this.value
        if(value !==oldVal){
            this.value = value
            this.cb.call(this.vm,value,oldVal)
        }
    },
    get:function(){
        Dep.target = this
        var value = this.vm.data[this.exp]
        Dep.target = null
        return value
    }
}