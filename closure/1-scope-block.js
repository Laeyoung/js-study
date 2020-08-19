var global = 'global'

if (true) {
	console.log('hello, ' + global)

  var local = 'local'
  var global = 'new ' + global
}

console.log('global: ' + global)
console.log('local: ' + local)
