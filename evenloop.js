console.log('start')
setTimeout(()=>{
    console.log('setTimeout')
    // new Promise(resolve =>{
    //     console.log('promise inner1')
    // }).then(()=>{
    //     console.log('promise then1')
    // })
},0)
new Promise(resolve =>{
    console.log("promise inner2")
    resolve()
}).then(()=>{
    console.log('promise then2')
})
