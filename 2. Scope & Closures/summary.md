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


## Chapter 3 - The Scope chain

### Lookup is mostly conceptual

The scope is usually determined during the intitial compilation, this improves the performance of the engine not needing to request for the scope at runtime. However in some case the scope is unknown, this is the case is you have shared global variables defined in another files, for that case the engine will need to use its lookup once per variable at runtime.

### Shadowing

Two variables can have the same name but they need to be in different scopes. 
If the variable `X` is in a nested scope of the variable `Y`, `X` will shadow `Y` and make it unaccessible from the scope of `X`.

### Global unshadowing trick

/!\ Do not use

Global variable are still accessible using `windows.Y`. This works only with variable that have been declared as `var` or `function` in the global scope.

```javascript
var one = 1; -> 1
let notOne = 2; -> undefined
const notTwo = 3; -> undefined
class notThree {} -> undefined
```

### Illegal shadowing

`var` vs `let` and `const`

```javascript
function something() {
    var special = "JavaScript";
    {
        let special = 42;
    }
}
```
This works

```javascript
function another() {
    {
        let special = "JavaScript";
        {
            var special = "JavaScript";
            // Syntax Error
        }
    }
}
```
Because the scope of `var` is limited by the function, this is not possible. If `var` would be in a nested function instead of `{}`, the code above would compile.

## Chapter 4 - Around the global scope

### Why global scope?

Most of JS applications are composed of multiple files, how can they run together in a single runtime context?

1. By using ES modules and the `import` statement, the engine knows which files to load.
2. By using a bundler that will contactenate all the files into a big one.
3. By using the global scope.

### Where exactly is this global scope?

#### Globals shadowing globals

`let` and `const` adds a global variable but not a global object property, then the global `something` shadows the global object property.

It's a bad idea to create divergence between the global object and the global scope. 
Always use `var` for globals.

```javascript
window.something = 42; // same behavior if: var something = 42
let something = "Kyle";
console.log(something);// Kyle
console.log(window.something);// 42
```

#### DOM globals

Some browser-based JS application automatically creates a global variable for every DOM element with an id.
Don't use it.

#### What's in window name

`Window.name` is actually a pre-defined getter/setter on the `window` object, which insists on its value being a string. 

```javascript
var name = 3
console.log(windows.name) // "3"
```

#### Web workers

Web workers is a platform extension on top of the browser-JS behavior, which allows a JS file to run in a completely separate thread. 
That implies that they are restricted in their communication with the main application thread (eg: no access to the global scope) to limit race conditions and that they don't have access to the DOM (eg: the `window` object).

In a Web Worker, the global object reference is made by using `self`.

#### Developer tools console

They are differences between a developer tools console and a pure JS environment, a .js file running on a brower. 
Those differences are observable in:

- The behavior of the global scope
- Hoisting
- Block-scoping declarators (`let` and `const`) when used is the outermost scope. 

/!\ Developer tools console is not suitable to verify an actual JS application context.

#### ES Modules

Variables declare in the outermost scope are not global variables, they are module-global. 
However the module-global scope is descended from the global scope and thus have access to the global variables.

#### Global this

This is another cheat to have access to the global scope.

```javascript
const theGlobalScopeObject = (new Function("return this"))();
```

As of ES2020, JS have standardized the `globalThis`, this new option aims to align the different possibilities of accessing the global scope in every JS environment: 

- `New Function()`
- `self`
- `window`
- `global`

## Chapter 5 - The (not so) secret lifecycle of variables
