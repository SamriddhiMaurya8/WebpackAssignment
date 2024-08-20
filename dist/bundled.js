// console.log('This is file 1');



function calculateCircleArea(radius) {
    if (radius <= 0) {
        console.error('Radius must be a positive number.');
        return null;
    }
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}.`);
    return area;
}


calculateCircleArea(5);
// console.log('This is file 2');
function reverseString(str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.error(' valid string please.');
        return null;
    }
    const reversed = str.split('').reverse().join('');
    console.log(` reverse "${str}" is "${reversed}".`);
    return reversed;
}


reverseString('Hello, world!');
