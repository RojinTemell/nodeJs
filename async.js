function getData(data) {

    return new Promise((resoleve, reject) => {
        console.log('veriler alınmaya çalışılıyor');

        if (data) {
            resoleve('veriler alındı');
        } else {
            reject("Veri bulunamadı");
        }
    })

}

function cleanData(receivedData) {

    return new Promise((resoleve, reject) => {
        console.log('veriler düzenleniyo');

        if (receivedData) {
            resoleve('veriler düzenlendi');
        } else {
            reject("Veri düzenlenemedi");
        }
    })

}

// getData(true)
//     .then(value => {
//         console.log(value);
//         return cleanData(true);
//     })
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


//async-await

// async function processData() {
//     try {
//         const receiveddata = await getData(true);
//         console.log(receiveddata);
//         const cleandata = await cleanData(true);
//         console.log(cleandata)
//     } catch (error) {
//         console.log(error)
//     }
// }
// processData();

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


async function processBook() {
    try {
        await addBook({ name: 'kitap4', auther: 'yazar4' });
        listBook();
    } catch (error) {
        console.log(error)
    }
}

processBook();