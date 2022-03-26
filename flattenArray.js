// flattening an array means converting a nested array into a single array.

const customFlatten = (arr, depth = 1) => {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(...customFlatten(item, depth - 1));
        } else {
            result.push(item);
        }
    })

    return result;
}

let arr = [1, 2, [3, 4, [5, 6]]];

console.log(customFlatten(arr, 2));
