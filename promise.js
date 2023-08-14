// const promise1 = new Promise((resolve, reject) => {
//     resolve('veriler alındı');
//     // reject('bağlantı hatası');
//     // ilk durum hangisiyse o durum çalışır diğerine bakmaz
// })

// // promise1.then(value => console.log(value));
// // promise1.catch(err => console.log(err))
// // bu şekilde de yazılabilir



// promise1
//     .then(value => console.log(value))
//     .catch(err => console.log(err))



const books = [
    { name: 'kitap1', auther: 'yazar1' },
    { name: 'kitap2', auther: 'yazar2' },
    { name: 'kitap3', auther: 'yazar3' },
]

const listBook = () => {
    books.map(book => console.log(book.name))
}

const addBook = (newbook) => {

    promise1 = new Promise((resolve, reject) => {
        books.push(newbook)
        resolve(books);
        // reject('bir hata')
    })

    return promise1;

}

addBook({ name: 'kitap4', auther: 'yazar4' })
    .then(() => {
        console.log('new list')
        listBook();
    })
    .catch(err => console.log(err));