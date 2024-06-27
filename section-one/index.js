let user = new (function () {
  this.name = 'John'
  this.isAdmin = false

  if (this.name === 'John') {
    this.isAdmin = true
  }
})()
console.log(user)
;(function () {
  console.log(222)
})()
