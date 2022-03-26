const calc = {
    value: 0,
    add(num) {
        this.value += num;
        return this;
    },
    subtract(num) {
        this.value -= num;
        return this;
    },
    multiply(num) {
        this.value *= num;
        return this;
    },
    divide(num) {
        this.value /= num;
        return this;
    }
}



const result = calc.add(10).multiply(5).subtract(2).divide(4).add(3);
console.log(result.value);
