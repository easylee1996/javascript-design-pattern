Function.prototype.myApply = function (context, argsArr) {
  // foo.__proto__ = Function.prototype, foo isn't a function, it's a object
  // but foo can call myApply
  if (typeof this !== 'function') {
    throw new TypeError('must be a function')
  }

  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError('args must be an array')
  }
  context = context || (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : undefined)

  // const fn = Symbal('fn') // not es6
  // import: bind the fn to the context
  // this() is wrong,
  context['myApply'] = this
  const result = Array.isArray(argsArr) ? context['myApply'](...argsArr) : context['myApply']()

  delete context['myApply']
  return result
}

const test = {
  name: 'xxx',
  hello: function () {
    console.log(`hello,${this.name}!`)
  },
}
const obj = { name: 'world' }
test.hello.myApply(obj) //hello,world!
test.hello.apply(obj) //hello,world!
const arr = [2, 3, 6, 5, 1, 7, 9, 5, 0]
console.log(Math.max.myApply(null, arr)) //9
console.log(Math.max.apply(null, arr)) //9
