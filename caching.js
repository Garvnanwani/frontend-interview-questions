// caching is a way to store the result of a function so that we dont have to calculate it again.

function cache(fn, context = this) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(context, args);
        cache[args] = result;
        return result;
    }
}

const square = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++) { }
    return num1 * num2;
}

console.time('function call 1');
console.log(square(2, 3));
console.timeEnd('function call 1');

console.time('function call 2');
console.log(square(2, 3));
console.timeEnd('function call 2')

const cachedSquare = cache(square);

console.time('cached function call 1');
console.log(cachedSquare(2, 3));
console.timeEnd('cached function call 1');

console.time('cached function call 2');
console.log(cachedSquare(2, 3));
console.timeEnd('cached function call 2')
