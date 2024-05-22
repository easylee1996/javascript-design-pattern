let duck = {
  duckSinging: () => {
    console.log('嘎嘎嘎')
  },
}

let chicken = {
  duckSinging: () => {
    console.log('嘎嘎嘎')
  },
}

let choir = [] // 合唱团

function joinChoir(animal) {
  // once animal has duckSinging function, it's a duck
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal)
    console.log('恭喜加入合唱团')
    console.log('合唱团已有成员数量: ' + choir.length)
  }
}

joinChoir(duck)
joinChoir(chicken)
