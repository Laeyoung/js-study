function sum(){
    a = 1

    return function sum2(b){
        a += b
        console.log(`sum2: ${a}, ${b}`)

      return function sum3(){
          b += b

          return `sum3, ${a}, ${b}`
        
      }

    }
}


var sum2 = sum()
var sum3 = sum2(2)

console.log(sum3())
console.log(sum3())

console.log('-------------')

var sum3_2 = sum2(10)
console.log(sum3())
console.log(sum3())
console.log('-- sum3_2 -- ')
console.log(sum3_2())
console.log(sum3_2())

