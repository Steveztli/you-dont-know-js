# Scope & Closures

## Chapter 1 - What's the scope
### Compiled or Interpreted

JS has 2 phases: Compiling and Executing, the compiling phase consist of synthax errors, early errors (eg: duplicated parameters,...) and hoisting.

### Two ways to cheat the the compilation phase
- Using eval `eval(some javascript code)`
- Using with, it makes the object to become the new local scope 
 
```javascript
var badIdea = { oops: "Ugh!" };

with (badIdea) {
    console.log(oops);   // Ugh!
}
```

### Lexical Scope
`let` and `const` are block-scoped when `var` is function-scoped.

The compilation phase creates a map of all the lexical scopes but the scopes will only be created at the execution phase.

## Chapter 2 - Illustrating lexical scope

### Js Engine

- Engine: responsible for compilation and execution
- Compiler: responsible for parsing and code-generation
- Scope Manager: collects and looks up the list of all declared variables and their accessibility.

### Lookup failures

#### Reference Error
When the source is not found in the scope or when the target is not found using `strict mode`. The message is `ReferenceError: XYZ is not defined` however what it really means is that `XYZ` is not declared.

When a variable is `undefined` that means that it was declared but not assigned to any value.

/!\ JS returns `undefined` as `typeof` unassigned or undeclared variables. 

#### Global scope
If the variable is a target and we are not using `strict mode`, JS will create a global scope variabla and assign it the value.

```Javascript
function getStudentName() {
    // assignment to an undeclared variable :(
    nextStudent = "Suzy";
}

getStudentName();

console.log(nextStudent);
//Prints Suzy
```

If we would be using `strict mode` this would throw a `ReferenceError`.


## Chapter 3