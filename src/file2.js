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