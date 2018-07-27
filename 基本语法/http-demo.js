const http = require('http')

const server = http.createServer((req,res)=>{
    // 处理中文乱码
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    switch (req.url) {
        case '/':
            res.write('首页')
            break;
        
        case '/a':
            res.end('a页')
            break;
        
        case '/b':
            res.end('b页','utf-8')
            break;
        
        default:
            res.end('404')
            break;
    }
})

server.listen(3000,()=>{
    console.log('success')
})
