Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }

  context = context || (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : undefined)

  const _this = this
  return function fn(...innerArgs) {
    // judge whether call myBind through new
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs)
    }
    return _this.apply(context, args.concat(innerArgs))
  }
}

// test
const test = {
  name: 'xxx',
  hello: function (a, b, c) {
    console.log(`hello,${this.name}!`, a + b + c)
  },
}
const obj = { name: 'world' }
let hello1 = test.hello.myBind(obj, 1)
let hello2 = test.hello.bind(obj, 1)
hello1(2, 3) //hello,world! 6
hello2(2, 3) //hello,world! 6
console.log(new hello1(2, 3))
//hello,undefined! 6
// hello {}
console.log(new hello2(2, 3))
//hello,undefined! 6
// hello {}
