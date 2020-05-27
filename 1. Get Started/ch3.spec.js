import * as functions from "./ch3";

describe("Iterators", () => {
  describe("spread operator", () => {
    test("argument", () => {
      expect(functions.spreadOperator(1, 2, 3)).toStrictEqual([1, 2, 3]);
    });

    test("copy array by value", () => {
      let array = [1, 2, 3];
      let arrayCopyByValue = [...array];
      let arrayCopyByReference = array;
      array.push(4);

      expect(arrayCopyByValue).toStrictEqual([1, 2, 3]);
      expect(arrayCopyByReference).toStrictEqual([1, 2, 3, 4]);
    });

    test("copy using string", () => {
      expect([..."Azul"]).toStrictEqual(["A", "z", "u", "l"]);
    });
  });
});

describe("Closures", () => {
  test("preserves the outside variable: count", () => {
    let incBy1 = functions.counter(1);
    let incBy3 = functions.counter(3);

    expect(incBy1()).toBe(1);
    expect(incBy1()).toBe(2);
    expect(incBy1()).toBe(3);

    expect(incBy3()).toBe(3);
    expect(incBy3()).toBe(6);
    expect(incBy3()).toBe(9);
  });
});

describe("This is dependent on its execution context", () => {
  test("1. without definition context", () => {
    expect(functions.classroom("Rosé")()).toBe("this is undefined");
  });

  test("2. with definition context", () => {
    let homework = {
      topic: "JavaScript",
      assignement: functions.classroom("Rosé")
    };
    expect(homework.assignement()).toBe("Rosé says to study JavaScript");
  });

  test("3. define context at call time", () => {
    let executionContext = { topic: "TypeScript" };
    expect(functions.classroom("Rosé").call(executionContext)).toBe(
      "Rosé says to study TypeScript"
    );
  });
});

describe("Prototypes", () => {
  test("object linkage from null is totally empty", () => {
    let fromNull = Object.create(null);
    let fromNotNull = Object.create({ name: "HaoHao" });

    // fromNull.toString()) to Throw error: TypeError toString not a function
    expect(fromNotNull.toString()).toBe("[object Object]");
  });

  test("object linkage", () => {
    let parent = { name: "HaoHao" };
    let child = Object.create(parent);
    expect(parent.name).toBe("HaoHao");
    expect(child.name).toBe("HaoHao");

    //overrides child properties if not defined in the child
    parent.name = "Yilin";
    expect(parent.name).toBe("Yilin");
    expect(child.name).toBe("Yilin");

    //overrides child properties only
    child.name = "Kim";
    expect(parent.name).toBe("Yilin");
    expect(child.name).toBe("Kim");

    //overrides parent properties only, if child properties is defined
    parent.name = "Vava";
    expect(parent.name).toBe("Vava");
    expect(child.name).toBe("Kim");
  });
});
