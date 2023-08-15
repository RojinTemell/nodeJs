//object distructing örneği

//  object (Literal)
// var user = {
//     name: "Hidayt",
//     city: "Delhi",
//     type: "Admin"
// }
// console.log(user.name); 

// object destructuring
// var {name, city, type} = user;
//  access as a normal variable
// console.log(name); 
// console.log(city);
// console.log(type);


//bu şekilde de yazılabilirdi
// const circleprocess = require('./circle');
// circleprocess.circleArea(5)
// circleprocess.circleCircumference(5)

const { circleArea, circleCircumference } = require('./circle');

circleArea(5)
circleCircumference(5)

// import ornek from '../async.js';
// import kullanılacaksa export böyle kullanılır
// export {
//     processBook
// }