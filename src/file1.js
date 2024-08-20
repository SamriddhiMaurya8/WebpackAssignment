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