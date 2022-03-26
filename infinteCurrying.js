function calc(a) {
    return function (b) {
        if (b) return calc(a + b);
        return a;
    }
}

console.log(calc(1)(2)(3)());
console.log(calc(1)(2)(3)(4)(5)());
