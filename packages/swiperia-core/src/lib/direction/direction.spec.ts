import { Point } from "../point/Point.type";
import { direction } from "./direction";

describe("direction", () => {
  it("should return the correct direction for positive coordinates", () => {
    const a: Point = [0, 0];
    const b: Point = [3, 4];
    expect(direction(a, b)).toEqual("down");
  });

  it("should return the correct direction for negative coordinates", () => {
    const a: Point = [-2, 3];
    const b: Point = [1, -1];
    expect(direction(a, b)).toEqual("up");
  });

  it("should return null for the same point", () => {
    const a: Point = [5, 5];
    const b: Point = [5, 5];
    expect(direction(a, b)).toBeNull();
  });

  it("should return the correct direction when x-coordinate is the same", () => {
    const a: Point = [0, 0];
    const b: Point = [0, 5];
    expect(direction(a, b)).toEqual("down");
  });

  it("should return the correct direction when y-coordinate is the same", () => {
    const a: Point = [0, 0];
    const b: Point = [5, 0];
    expect(direction(a, b)).toEqual("right");
  });
});
