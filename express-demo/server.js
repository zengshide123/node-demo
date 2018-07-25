const express = require('express') ;
const path = require('path') ;
// 加密utility
const utility = require('utility') ;
// 处理post请求body
const bodyParser = require('body-parser') ;
// 处理模版引擎
const cons = require('consolidate')


const app = express() ;

// 设置模版引擎
app.engine('html', cons.swig) ;
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname) + '/views');
// 处理post的body 
app.use(bodyParser.urlencoded({ extended: false })) ;
app.use(bodyParser.json())

var users = [];
users.push({ name: 'tobi' });
users.push({ name: 'loki' });
users.push({ name: 'jane' });
users.push({ name: 'zq' });

app.get('/',(req,res)=>{
    res.render('index.html',{
        title:'zq'
    })
})
app.get('/user',(req,res)=>{
    res.render('user.html',{
        title:'users',
        users,
        qs: utility.md5(req.query.qs)
    })
})

app.listen(3000,()=>{
    console.log('success')
})

