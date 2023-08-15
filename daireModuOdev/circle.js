function circleArea(r) {
    const pi = 3.14;
    area = pi * r * r
    console.log('circle area: ' + area);
}


function circleCircumference(R) {
    const pi = 3.14;
    circum = 2 * pi * R;
    console.log('circle circumference: ' + circum)
}




module.exports = {
    circleArea,
    circleCircumference,
}

// export işlemi
// 1.
// module.exports.circleArea;
// module.exports.circleCircumference; 

// 2.
// module.exports= {
//     circleArea,
//     circleCircumference,
// }

// 3.
// tek bir fonk import ediceksek default kullanılabilir
// export default showPrimeNumbers;