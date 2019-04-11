// events是node的核心模块

const Events = require('events');
// console.log(Events);

// EventEmitter是events的一个属性,它指向events
// 事件对象的构造函数
// 事件的对象都是EventEmitter的实例

const EventEmitter = Events.EventEmitter;
// console.log(EventEmitter === Events);

// EventEmitter生成事件发生器实例

const emitter = new EventEmitter();
// console.log(emitter);

// 事件生成器实例的emit和on方法
// emit(eventName,[args]) 触发一个事件(不支持链式触发)
// on(eventName,listener) 监听一个事件(支持链式注册)
// 该方法返回一个boolean
// 当对应的事件在触发前注册有监听器时,返回true;否则返false
// 同一事件的,事件监听器的执行顺序为按注册先后同步执行

// emitter.on('doit',(args)=>{
//     console.log(args);
// }).on('doagain',(args)=>{
//     console.log(args);
// })
// const doit = emitter.emit('doit','i am doit')
// const doagain = emitter.emit('doagain','i am doagain')

// console.table({doit,doagain});

// 注册监听器的另外一种方法
// addEventListener(eventName,listener)
// 功能与on注册监听器一致

// emitter.addListener('doaddlistener',(args)=>{
    // console.log(args);
// })

// emitter.emit('doaddlistener','i am addeventlistener')

// 注意使用on和addlistener是将listenter处理函数添加到对应的事件的数组的末尾
// 事件处理函数的执行顺序是按照在改数组中的位置从前往后执行

// prependLister(eventName,listener)
// 将监听器的listener处理函数添加到数组头部

// 事件发生器,触发方法中传递的数据,能够在所有的注册监听器的listener中获得

// emitter.on('do',(args)=>{
//     console.log('first on',args);
// }).addListener('do',(args)=>{
//     console.log('second addListener',args);
// }).prependListener('do',(args)=>{
//     console.log('third prependListener',args);
// })

// emitter.emit('do','i am do args')

// once(eventName,listener)
// 该注册方式的监听器只执行一次,listener放置在数组的尾部

// emitter.on('do',()=>{
//     console.log('on');
// }).once('do',()=>{
//     console.log('once');
// })

// emitter.emit('do');
// emitter.emit('do')

// prependOnceListener('eventName',listener)
// 该注册方式的监听器只执行一次,listener放置在数组的头部

// emitter.on('do',()=>{
//     console.log('do');
// }).prependOnceListener('do',()=>{
//     console.log('prependOnceListener');
// })
// emitter.emit('do');
// emitter.emit('do')

// removeAllListener('eventName')
// 移除全部或某一事件的所有监听器
// 不传eventName时,为移除所有的监听器
// 传递eventName时,移除某一中类型的所有监听器

// emitter.on('do',()=>{
//     console.log('do');
// }).on('doagain',()=>{
//     console.log('doagain');
// })

// emitter.emit('do')
// emitter.removeAllListeners('do');
// emitter.emit('do')
// emitter.emit('doagain')

// removeListener(eventName,listener)
// 移除某一事件的某一个监听函数
// 当同一个监听函数注册多次时,每调用一次该方法只会从数组尾部移除一个
// const handler = ()=>{
//     console.log('i am handler');
// }
// const handler1 = ()=>{
//     console.log('i am handler1');
// }
// emitter.on('do',handler).on('do',handler1).on('do',handler);
// emitter.emit('do')
// emitter.removeListener('do',handler)
// emitter.emit('do')

// 事件发生器获取注册事件数组
// eventNames()

// emitter.on('do',()=>{}).on('do1',()=>{}).on('do2',()=>{})
// const arr = emitter.eventNames();
// console.log(...arr);

// listenerCount(eventName)
// 获取某一个事件的listener的的个数

// emitter.on('do',()=>{}).on('do',()=>{}).on('do',()=>{});
// const count = emitter.listenerCount('do');
// console.log(count);

// listeners(eventName)
// 获取某一个事件的listener数组

// emitter.on('do',()=>{}).on('do',()=>{}).on('do',()=>{})
// const listeners = emitter.listeners('do')
// console.log(listeners);


// 事件

// 当一个事件发生器,增加一个listener时,会触发newListener事件

// emitter.on('newListener',()=>{
//     console.log(333);
// })
// emitter.on('test',show)

// 当一个事件发生器,移除一个listener时,会触发removeListener事件
// function show(){
    // console.log(555);
// }
// emitter.on('removeListener',()=>{
    // console.log(1231);
// })
// emitter.removeListener('test',show);
// emitter.emit('test')


