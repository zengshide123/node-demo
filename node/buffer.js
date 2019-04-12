// 用来处理二进制流数据
// Buffer挂载到global全局对象上
// console.table(Buffer);
// console.log(111);

// 当一个Buffer实例长度固定后,无法更改
// Buffer.allocUnsafe(len)

// const buffer = Buffer.allocUnsafe(10)
// console.log(...buffer);

// fill()
// 数组填充数据

// buffer.fill(1)
// console.log(...buffer);

// Buffer.alloc(len,fill,encoding)
// len Buffer的长度
// fill 预期填充的数据 当fill为undefined时 会使用0来填充
// encoding 当内容为字符时,编码格式

// const buffer = Buffer.alloc(5)
// console.log(buffer);

// Buffer.from(args)
/**
 * args值
 * array 或者 buffer 时 将数据传入buffer空间
 * string 可以增加 encoding 用来便是保存的字符编码
 */


// const buffer   = Buffer.from([1,2,3,4,5])
// console.log(buffer);

// const buffer1 = Buffer.from(buffer);
// console.log(buffer1);

// const buffer = Buffer.from('this is a tést');
// console.log(buffer.toString());
// console.log(buffer.toString('binary'));

// var buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');
// console.log(buf2.toString());

