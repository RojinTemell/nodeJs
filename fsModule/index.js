const fs = require('fs');

// //dosya okuma
// fs.readFile('/password.txt', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data)
//     console.log('dosya okundu')
// })

// //dosya yazma
// fs.writeFile('example.txt', 'hello world', 'utf8', (err) => {
//     if (err) console.log(err);
//     console.log('başarılı')
// })

// fs.writeFile('example.json', '{"name":"Roj","age":21}', 'utf8', (err) => {
//     if (err) console.log(err);
//     console.log('işlem tamam')
// })


// //veri ekleme
// fs.appendFile('example.txt', '\nRojin temel', 'utf8', (err) => {
//     if (err) console.log(err);
//     console.log('veri eklendi')
// })

// //dosya silme
// fs.unlink('example.json', (err) => {
//     if (err) console.log(err);
//     console.log('dosya silindi')
// })


// //klasor oluşturma
// // recursive iki klasorunda oluşmasını sağlar
// fs.mkdir('uploads/img', { recursive: true }, (err) => {
//     if (err) console.log(err);
//     console.log('klasorler olusturuldu')
// })

//klasor silme

// fs.rmdir('uploads', { recursive: true }, (err) => {
//     if (err) console.log(err);
//     console.log('klasorler silindi')
// })