# Scope & Closures

## Chapter 1
### Compiled or Interpreted

JS has 2 phases: Compiling and Executing, the compiling phase consist of synthax errors, early errors (eg: duplicated parameters,...) and hoisting.

### Two ways to cheat the the compilation phase
- Using eval `eval(some javascript code)`
- Using with, it makes the object to become the new local scope 
 ```
var badIdea = { oops: "Ugh!" };

with (badIdea) {
    console.log(oops);   // Ugh!
}
```

### Lexical Scope
`let` and `const` are block-scoped when `var` is function-scoped.

The compilation phase creates a map of all the lexical scopes but the scopes will only be created at the execution phase.

## Chapter 2