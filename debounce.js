// debouncing is a technique to avoid the function being called too often.
// It is useful when you have a function that is called many times, but you
// only want it to be called once after a certain amount of time has passed.
// for eg search box, call api when user stops typing for 1000ms or something

function debounce(cb, ms) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => cb.apply(this, args), ms);
    };
}

function printSomething() {
    console.log("something")
}

const debouncedPrintSomething = debounce(printSomething, 1000);
