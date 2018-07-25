const express = require('express') ;
const request = require('superagent') ;
const cheerio = require('cheerio') ;

const app = express() ;

// 社区主题
app.get('/',(req,res,next)=>{
    request.get('https://cnodejs.org/')
           .end((err,sres)=>{
                if(err){
                    return next() ;
                }
                let $ = cheerio.load(sres.text) ;
                let items = [] ;
                      $('#topic_list .topic_title').each(function (idx, element) {
                          var $element = $(element);
                          items.push({
                              title: $element.attr('title'),
                              href: $element.attr('href')
                          });
                      });
                      res.send(items);                  
           })
})

app.listen(3000,()=>{
    console.log('running success')
})