
# 一个简单的爬虫demo

## 主要知识
 
 1、 服务器端发起请求   
 2、 使用cheerio处理返回的数据    
 3、 服务器返回处理后的数据
 
 ## 遇到的问题
   `中文乱码`
   
  针对本demo的依赖:
  `
      cnpm i superagent-charset --save
  `
 ```js
       superAgent.get('XX.com')
                 .charset('gbk')
 ```
 
 ## 问题反馈
 
 `
  本demo只用于学习，若有任何不妥之处，请联系我删除
`
 
   
  
  
