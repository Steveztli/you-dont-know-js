export const typeOf = (a, b) => typeof a === b;
export const doubleEquality = (a, b) => a == b;
export const tripleEquality = (a, b) => a === b;
export const anyEquality = (a, b) => doubleEquality(a,b) || tripleEquality(a,b);
export const bothEquality = (a, b) => doubleEquality(a,b) && tripleEquality(a,b);

export const testExpression = () => {
    //return functionExpression() => Crash: Can't be defined before being called
    const functionExpression = function() {return true}
    return functionExpression()
};

export const testDeclaration = () => {
    return functionDeclaration()
    function functionDeclaration() {return true}
};

export function createModule(name) {
    const title = name;
    const getTitle = _ => title;
    const getSecret = _ => "Secret"

    return {getTitle}
}

export class Book {
    constructor(title) {
        this.title = title;
    }

    getTitle() {
        return this.title; 
    }

    getSecret() {
        return "Secret"; 
    }
}