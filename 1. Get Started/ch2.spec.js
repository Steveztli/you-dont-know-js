import * as functions from "./ch2";

describe("Typeof", () => {
  test("mapping", () => {
    let mapping = [
      { value: 1, type: "number" },
      { value: NaN, type: "number" },
      { value: "Hello", type: "string" },
      { value: { name: "Yuna" }, type: "object" },
      { value: [1, 2, 3], type: "object" },
      { value: null, type: "object" },
      //Altough `function` is an object, typeof returns `function`
      { value: () => console.log("Hi!"), type: "function" },
      { value: undefined, type: "undefined" }
    ];

    mapping.forEach(val => expect(functions.typeOf(val.value, val.type)).toBeTruthy());
  });
});

describe("Comparing", () => {
  test("equals with coercion", () => {
    expect(functions.doubleEquality(1, "1")).toBeTruthy();
    expect(functions.tripleEquality(1, "1")).toBeFalsy();
    //coercion for equals operator defaults to numbers
    expect(functions.doubleEquality(true, 3)).toBeFalsy();
  });
  
  test("comparing data", () => {
    let mapping = [
      { value: [1, 2, 3], compareTo: [1, 2, 3] },
      { value: { name: "Yuna" }, compareTo: { name: "Yuna" } },
      { value: _ => {}, compareTo: _ => {} }
    ];
    
    mapping.forEach(val => expect(functions.anyEquality(val.value, val.compareTo)).toBeFalsy());
  });

  test("comparing reference", () => {
    let array = [1, 2, 3];
    let arrayCopy = array;
    let object = { name: "Yuna" };
    let objectCopy = object;
    let func = _ => {};
    let funcCopy = func;

    expect(functions.bothEquality(array, arrayCopy)).toBeTruthy();
    expect(functions.bothEquality(object, objectCopy)).toBeTruthy();
    expect(functions.bothEquality(func, funcCopy)).toBeTruthy();
  });
});

describe("Function", () => {
  test("expression", () => {
    expect(functions.testExpression()).toBeTruthy();
  });

  test("declaration", () => {
    expect(functions.testDeclaration()).toBeTruthy();
  });
});

describe("Object creation", () => {
  test("classes has no private", () => {
    const book = new functions.Book("You don't know JS")

    expect(book['title']).toBe("You don't know JS");
    expect(book['getTitle']()).toBe("You don't know JS");
    expect(book['getSecret']()).toBe("Secret");
  });
  
  test("modules has private", () => {
    const module = functions.createModule("You don't know JS");
    
    expect(module['title']).toBeUndefined()
    expect(module['getTitle']()).toBe("You don't know JS");
    expect(module['getSecret']).toBeUndefined();
  });
});