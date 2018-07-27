const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req,res)=>{
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })
    let file_name = path.resolve(__dirname,`www/${req.url}`)

    if (req.url === '/') file_name = path.resolve(__dirname, `www/index.html`)

    fs.readFile(file_name,(err,data)=>{
        if(err){
            fs.readFile(path.resolve(__dirname, `www/404.html`),(err,data)=>{
                res.write(data)
                res.end()
            })
        }else{
                res.write(data)
                res.end()
        }
    })
})

server.listen(3000,()=>{
    console.log(1111)
})