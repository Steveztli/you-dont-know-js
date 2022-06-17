# Refactoring

## Chapter 1: A First Example
#### Before any refactoring:
- Be sure to have a good set of test.
- Refactor the code even before adding the new feature as this will ensure the as-is functionnality still works.

#### Example of a refactoring flow:
- Identify part of the code that can be extracted as functions and name it correctly
  - in the newly create function, identify the variables: are they parameters, do they mutate,...
- Run tests after every small refactoring that is still validated by the tests then commit it locally.
- Look at the variables in the extracted function, should they be renamed for clarity? 
  i.e.: Call your return variable: 'result' and an iterated value aCar, aDog,...
- Remove parameters of the function that can be accessed directly from within the function, less variables are easier to read.
- Remove the stored result and use the function result in the parent directly
- Redo this as much as needed

Do not considerate performance when refactoring, the author suggest to care about it once the changes are done as it will be easier to tune it afterwars. One step a time.

When the logic is clear, it's time to refactor based on functionality, one functionality per fonction.

What I think was interesting:

- Naming result result and aPerformance
- Smaller commits that I dont do enough
- Use IDE tools
- Small steps!

Chapter 2; Principles of refactoring

My colleague Pramod Sadalage developed an approach to evolutionary
database design [mf-evodb] and database refactoring [Ambler & Sadalage] that
is now widely used.

Yagni design, "you aren't going to need it"
I suggest Bill Wake’s Refactoring Workbook [Wake]
that contains many exercises to practice refactoring.
Josh Kerievsky tied these two worlds closely together with
Refactoring to Patterns [Kerievsky],
Refactoring HTML [Harold] (by Elliotte Rusty Haro