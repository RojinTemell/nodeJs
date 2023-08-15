const fs = require('fs')

fs.writeFile('employees.json', '{"name":"Employee 1 Name","salary":2000}', 'utf8', (err) => {
    if (err) console.log(err)
    console.log('işlem tamam')
})

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})



fs.writeFile('employees.json', '{"name":"Employee 1 Name","salary":3000}', 'utf8', (err) => {
    if (err) console.log(err)
    console.log('veri güncellendi')
})

fs.unlink('employess.json', (err) => {
    if (err) console.log(err)
    console.log('okey')
})