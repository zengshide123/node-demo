const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req ,res )=>{
       res.writeHead(200, {
           'Content-Type': 'text/html; charset=utf-8'
       })
       let str = req.url.split('?');
       if(str[1]){
            let strArr = str[1].split('&');
            let userInfo = strArr.map(item=>{
                    return {
                            [item.split('=')[0]]:item.split('=')[1]
                    }
                })
            fs.writeFile(path.resolve(__dirname,'data.json'),JSON.stringify(userInfo),(err)=>{
            })    
       }

       res.write('aaa')
       res.end()
})

server.listen(3000,()=>{
    console.log('succes')
})