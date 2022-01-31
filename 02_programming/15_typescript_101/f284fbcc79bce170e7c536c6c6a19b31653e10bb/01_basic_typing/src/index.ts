// Code here

// a constant called `hello`, binded to a string: "Sparta";
// - a constant called `foo`, binded to an integer: 12;
// - a constant called `bar`, binded to an integer: 8;
// - a constant called `sumResult`, binded to the sum of foo and bar;
// - a constant called `digits`, binded to an array from zero to nine.
// - a constant called `isOpen`, binded to a boolean: `false`.
// - a constant called `empty`, binded to a value of `null`.

const hello: string = "Sparta";
const foo: number = 12;
const bar: number = 8;
//const sumResult: number = foo + bar;
const sumResult: number = foo + bar;
const digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const isOpen: boolean = false;
const empty: null = null;

// console.log(typeof hello);
// console.log(typeof foo);
// console.log(typeof bar);
// console.log(typeof sumResult);
// console.log(typeof digit);
// console.log(typeof isOpen);
// console.log(typeof empty);

export {hello, foo, bar, sumResult, digits, isOpen, empty}
