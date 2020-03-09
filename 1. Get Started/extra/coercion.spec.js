import * as coercion from "./coercion";

describe("Coercion", () => {
  test("booleans", () => {
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
    expect(() => {}).toBeTruthy();
    expect(Symbol()).toBeTruthy();

    expect(coercion.add(true, false)).toBe(1);
    expect(coercion.add(true, true)).toBe(2);
  });

  test("arrays", () => {
    expect(coercion.doubleEquality(["x"], "x")).toBeTruthy();
    expect(coercion.tripleEquality(["x"], "x")).toBeFalsy();
  });

  describe("numbers and string", () => {
    test("mathematical operations", () => {
      expect(coercion.add(1, "1")).toBe("11");
      expect(coercion.substract(1, "1")).toBe(0);
      expect(coercion.divide(4, "2")).toBe(2);
    });

    test("'or' and 'and'", () => {
      // Resolves values to boolean and returns the first "true" coerced value, if none the latest "false" one
      expect(coercion.or(2, "two")).toBe(2);
      expect(coercion.or("two", 2)).toBe("two");
      expect(coercion.or(0, "two")).toBe("two");
      expect(coercion.or("", 2)).toBe(2);
      expect(coercion.or("", 0)).toBe(0);

      // Resolves values to boolean,
      // if the result of the operation is "false" it returns the first "false" coerced value
      // if the result of the operation is true, return the latest one
      expect(coercion.and("two", 2)).toBe(2);
      expect(coercion.and(2, "two")).toBe("two");
      expect(coercion.and(0, "two")).toBe(0);
      expect(coercion.and(2, "")).toBe("");
      expect(coercion.or("", 0)).toBe(0);
    });
  });

  test("numbers and boolean", () => {
    expect(coercion.greaterThan(9, "10")).toBeFalsy();
  });
});
