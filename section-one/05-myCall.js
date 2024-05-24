Function.prototype.myCall = function (context, ...args) {
  // foo.__proto__ = Function.prototype, foo isn't a function, it's a object
  // but foo can call myCall
  if (typeof this !== 'function') {
    throw new TypeError('must be a function')
  }

  context = context || (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : undefined)

  // const fn = Symbal('fn') // not es6
  // import: bind the fn to the context
  // this() is wrong,
  context['myCall'] = this

  const result = context['myCall'](...args)

  delete context['myCall']
  return result
}

const test = {
  name: 'test',
  foo: function () {
    console.log(this.name)
  },
  add: function (a, b) {
    return a + b
  },
}

const obj = { name: 'world' }

test.foo.myCall(obj) // world
test.foo.call(obj) // world
console.log(test.add.myCall(null, 1, 2)) // 3
console.log(test.add.call(null, 1, 2)) // 3
