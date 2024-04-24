import type { Vector2 } from "../types/Vector2.type";
import { direction } from "./direction";

describe("direction", () => {
  it("should return the correct direction for positive coordinates", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    expect(direction(a, b)).toEqual("down");
  });

  it("should return the correct direction for negative coordinates", () => {
    const a: Vector2 = [-2, 3];
    const b: Vector2 = [1, -1];
    expect(direction(a, b)).toEqual("up");
  });

  it("should return null for the same point", () => {
    const a: Vector2 = [5, 5];
    const b: Vector2 = [5, 5];
    expect(direction(a, b)).toBeNull();
  });

  it("should return the correct direction when x-coordinate is the same", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [0, 5];
    expect(direction(a, b)).toEqual("down");
  });

  it("should return the correct direction when y-coordinate is the same", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [5, 0];
    expect(direction(a, b)).toEqual("right");
  });

  it("should return 'right' when x is positive and greater than y", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [4, 2];
    expect(direction(a, b)).toEqual('right');
  });

  it("should return 'left' when x is negative and greater than y", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [-5, -3];
    expect(direction(a, b)).toEqual('left');
  });

  it("should return 'down' when y is positive and greater than x", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [2, 4];
    expect(direction(a, b)).toEqual('down');
  });

  it("should return 'up' when y is negative and greater than x", () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [-3, -5];
    expect(direction(a, b)).toEqual('up');
  });
});
