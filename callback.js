const books = [
    { name: 'kitap1', auther: 'yazar1' },
    { name: 'kitap2', auther: 'yazar2' },
    { name: 'kitap3', auther: 'yazar3' },
]

const listBook = () => {
    books.map(book => console.log(book.name))
}

const addBook = (newbook, callback) => {
    books.push(newbook);
    callback();
    // if we cannot add this method, Even though we add new book, it doesnt show it.
    // through this argument we use a callback function.
}

addBook({ name: 'kitap4', auther: 'yazar4' }, listBook)