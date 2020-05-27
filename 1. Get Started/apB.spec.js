import * as functions from "./apB";

describe("Exercices", () => {
  test("schedule a meeting", () => {
      expect(functions.scheduleMeeting("7:00",15)).toBeFalsy();
      expect(functions.scheduleMeeting("07:15",30)).toBeFalsy();
      expect(functions.scheduleMeeting("7:30",30)).toBeTruthy();
      expect(functions.scheduleMeeting("11:30",60)).toBeTruthy();
      expect(functions.scheduleMeeting("17:00",45)).toBeTruthy();
      expect(functions.scheduleMeeting("17:30",30)).toBeFalsy();
      expect(functions.scheduleMeeting("18:00",15)).toBeFalsy();
  });
  
  test("range", () => {
      expect(functions.range(1,3)).toStrictEqual([1,2,3]);
      expect(functions.range(0,1)).toStrictEqual([0,1]);
      expect(functions.range(3,3)).toStrictEqual([3]);
      expect(functions.range(3,0)).toStrictEqual([]);
      var start3 = functions.range(3);
      expect(start3(3)).toStrictEqual([3]);
      expect(start3(6)).toStrictEqual([3,4,5,6]);
      expect(start3(0)).toStrictEqual([]);
      });
});
