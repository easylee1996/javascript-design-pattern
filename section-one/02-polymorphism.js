// not good
let makeSound = animal => {
  if (animal instanceof Duck) {
    console.log('嘎嘎嘎')
  } else if (animal instanceof Chicken) {
    console.log('咯咯咯')
  }
}

let Duck = function () {}
let Chicken = function () {}
makeSound(new Duck())
makeSound(new Chicken())
// when add a animal, we must edit the makeSound function

// good
let makeSound = animal => {
  animal.sound()
}

let Duck = function () {}
Duck.prototype.sound = () => {
  console.log('嘎嘎嘎')
}

let Chicken = function () {}
Chicken.prototype.sound = () => {
  console.log('咯咯咯')
}

makeSound(new Duck())
makeSound(new Chicken())

// when add a animal, we just add a object that has a prototype with sound function
let Dog = function () {}
Dog.prototype.sound = () = {
  console.log("汪汪汪")
}
makeSound(new Dog())
