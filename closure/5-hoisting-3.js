let global = 'global'

if (true) {
  console.log('hello, ' + global)

  let local = 'local'
  let global = 'new ' + global
}

console.log('global: ' + global)