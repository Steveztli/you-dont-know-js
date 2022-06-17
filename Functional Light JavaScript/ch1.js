export const defaultParameter = (x = 1) => x;
export const binary = (a, b) => {};
export const ternary = (a, b, c) => {};
export const aritySpread = (b, ...a) => { return a };
export const arityDefault = (b, c = 2) => {};

export function argumentsLength(a, b, c) {
    return arguments.length;
}

export function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    }
}

export const addTo3 = partial( add , 3);

function add(...args) {
    return args.reduce((a,b) => a+b);
}