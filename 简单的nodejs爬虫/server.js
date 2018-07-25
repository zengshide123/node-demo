const express = require('express') ;
const superAgent = require('superagent') ;
const cheerio = require('cheerio') ;

require('superagent-charset')(superAgent);

const app = express() ;

// 小说网站排行榜
app.get('/',(req,res)=>{
    superAgent.get('https://www.woquge.com/paihangbang/')
    .charset('gbk')
    .end((err,sres)=>{
        if(err){
            return next(err);
        } ;
        var $ = cheerio.load(sres.text);
        var items = [] ;
        $('#main .box').each((idx,ele)=>{
            var $ele = $(ele) ;
            var $h3 = $ele.find('h3');
            var liitems = [];
            var $lis = $ele.find('ul').eq(0).find('li');
            $lis.each((idx,ele)=>{
                var $elle = $(ele)
                var $a = $elle.find('a').eq(0);
                liitems.push({
                    title:$a.text(),
                    href:$a.attr('href')
                })
            })
            items.push({
                title:$h3.text(),
                list:liitems
            })
        })
        res.send(items)
    })
})

app.listen(3000,()=>{
    console.log('running')
})
