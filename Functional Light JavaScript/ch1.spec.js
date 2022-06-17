import * as functions from "./ch1";

describe("Default Parameter", () => {

    test("Null is kept", () => {
      expect(functions.defaultParameter(null)).toEqual(null);
    });
    
    test("Valid parameter is kept", () => {
      expect(functions.defaultParameter(0)).toEqual(0);
    });
    
    test("Undefined defaults", () => {
      expect(functions.defaultParameter(undefined)).toEqual(1);
    });
    
    test("No parameter defaults", () => {
      expect(functions.defaultParameter()).toEqual(1);
    });
    
});

describe("Arity", () => {

    test("Binary", () => {
      expect(functions.binary.length).toEqual(2);
    });

    test("Ternary", () => {
      expect(functions.ternary.length).toEqual(3);
    });

    test("Spread operator is not counted", () => {
      expect(functions.aritySpread.length).toEqual(1);
    });

    test("Default parameters are not counted", () => {
      expect(functions.arityDefault.length).toEqual(1);
    });

});

describe("Arguments length", () => {

    test("Counts the amount of arguments", () => {
      expect(functions.argumentsLength(1,2,3)).toEqual(3);
    });

    test("Only counts the amount of passed arguments", () => {
      expect(functions.argumentsLength(1)).toEqual(1);
    });

    test("Counts all arguments passed even if it is more than accepted", () => {
      expect(functions.argumentsLength(1,2,3,4,5)).toEqual(5);
    });
    
    test("Spread operator can be passed as individual arguments", () => {
      expect(functions.argumentsLength(...[1,2,3])).toEqual(3);
    });
});

describe("Spread operator as argument", () => {

  test("No arguments leads to empty array", () => {
    expect(functions.aritySpread(1)).toEqual([])
  });

  test("Extra arguments are collected in the array", () => {
    expect(functions.aritySpread(1,2,3)).toEqual([2,3])
  });
});

fdescribe("Partial", () => {
  test("Add to 3, preset function and initial value", () => {
    expect(functions.addTo3(1,2,3)).toEqual(9)
  });
});