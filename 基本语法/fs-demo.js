const fs = require('fs')
const path = require('path')

// 引入path模块处理文件路径错误问题
fs.readFile(path.resolve(__dirname,'2.txt'),(err,data)=>{
    console.log(err)
    console.log(data.toString())
})

fs.writeFile(path.join(__dirname,'3.txt'),"3",(err)=>{
    console.log(err)
})
fs.writeFile(path.join(__dirname,'1.txt'),"4",(err)=>{
    console.log(err)
})