export const spreadOperator = (...val) => {
    return val;
}

export const counter = (step = 1) => {
    var count = 0
    return () => {
        count += step
        return count
    }
}

export const classroom = (teacher) => {
        return function study() {
            return this ?`${teacher} says to study ${this.topic}` : `this is undefined`}
}