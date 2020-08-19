var global = 'global'

function food(param) {
	console.log('hello, ' + param)

  var local = 'local'
  var global = 'new ' + param
}

console.log('global: ' + global)
console.log('local: ' + local)
