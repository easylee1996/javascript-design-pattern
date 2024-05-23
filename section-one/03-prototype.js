function Person() {
  this.getName = function () {
    console.log('person')
  }
}
Person.prototype.getProtoName = function () {
  console.log('proto person')
}
const person = new Person()
const person1 = new Person()

// 原型对象上的方法是相同的，但是实例化对象是不同的
console.log(person.getName === person1.getName) // false
console.log(person.getProtoName === person1.getProtoName) // true
