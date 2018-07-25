// 引入各种库
const express = require('express') ;
const superAgent = require('superagent') ;
const cheerio = require('cheerio') ;
const eventProxy = require('eventproxy') ;
const url = require('url') ;

const app = express() ;

const baseUrl = 'https://cnodejs.org/' ;

app.get('/info',(req,res,next)=>{
    superAgent.get(baseUrl)
              .end((err,res1)=>{
                 if(err){
                     next()
                 }
                 let topicUrls = [] ;
                 const $ = cheerio.load(res1.text) ;
                 $('#topic_list .topic_title').each((idx,el)=>{
                     const $el = $(el) ;
                     const href = url.resolve(baseUrl,$el.attr('href')) ;
                     topicUrls.push(href)
                 })
                //  事件代理
                 const ep = new eventProxy() ;
                //  重复事件监听
                 ep.after('topic_html',topicUrls.length,(topics)=>{
                      topic = topics.map((item)=>{
                          let topicUrl = item[0] ;
                          let topicHtml = item[1] ;
                          let $ = cheerio.load(topicHtml) ;
                          return ({
                              title: $('.header .topic_full_title').text().trim(),
                              href:topicUrl,
                              comment: $('.panel .reply_item').eq(0).find('.markdown-text p').text().trim()
                          })
                      })  
                      res.send(topic) 
                 })
                //  派发事件
                topicUrls.forEach((item)=>{
                    superAgent.get(item)
                              .end((err,res2)=>{
                                   ep.emit('topic_html',[item,res2.text]) 
                              })
                })
              })
})




app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(3000,()=>{
    console.log(`running success at port 3000`)
})
