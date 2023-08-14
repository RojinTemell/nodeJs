const posts = [
    { id: 1, name: 'post1' },
    { id: 2, name: 'post2' },
    { id: 3, name: 'post3' },
    { id: 4, name: 'post4' },
]

// callback

function listPost() {
    posts.map(post => console.log(post))
}

function addPost(newPost, callback) {
    posts.push(newPost)
    callback();
}
addPost({ id: 5, name: 'post5' }, listPost);




// promise

function listPost() {
    posts.map(post => console.log(post))
}

function addPost(newPost) {

    promise1 = new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
        reject('hata var');
    })
    return promise1

}

addPost({ id: 5, name: 'post5' })
    .then(() => listPost())
    .catch(err => console.log(err))




// async

function listPost() {
    posts.map(post => console.log(post))
}

function addPost(newPost) {
    return new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve('işlem tamam')
        reject('hatalı sonnuç')
    })
}

async function processPost() {
    try {
        await addPost({ id: 7, name: 'post7' })
        listPost();
    } catch (error) {
        console.log(error)
    }
}

processPost();