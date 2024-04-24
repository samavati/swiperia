import { movement } from "./movement";

describe("movement", () => {
  it("should calculate movement correctly for positive coordinates", () => {
    const source: [number, number] = [0, 0];
    const target: [number, number] = [3, 4];
    const duration = 100;

    const result = movement(source, target, duration);

    expect(result.source).toEqual(source);
    expect(result.target).toEqual(target);
    expect(result.deltaX).toBe(3);
    expect(result.deltaY).toBe(4);
    expect(result.absX).toBe(3);
    expect(result.absY).toBe(4);
    expect(result.direction).toBe("down");
    expect(result.velocity).toBe(0.05);
    expect(result.vxvy).toEqual([0.03, 0.04]);
    expect(result.distance).toBe(5);
  });

  it("should calculate movement correctly for negative coordinates", () => {
    const source: [number, number] = [-2, 3];
    const target: [number, number] = [1, -1];
    const duration = 200;

    const result = movement(source, target, duration);

    expect(result.source).toEqual(source);
    expect(result.target).toEqual(target);
    expect(result.deltaX).toBe(3);
    expect(result.deltaY).toBe(-4);
    expect(result.absX).toBe(3);
    expect(result.absY).toBe(4);
    expect(result.direction).toBe("up");
    expect(result.velocity).toBe(0.025);
    expect(result.vxvy).toEqual([0.015, -0.02]);
    expect(result.distance).toBe(5);
  });

  it("should handle the case when source and target are the same", () => {
    const source: [number, number] = [5, 5];
    const target: [number, number] = [5, 5];
    const duration = 100;

    const result = movement(source, target, duration);

    expect(result.source).toEqual(source);
    expect(result.target).toEqual(target);
    expect(result.deltaX).toBe(0);
    expect(result.deltaY).toBe(0);
    expect(result.absX).toBe(0);
    expect(result.absY).toBe(0);
    expect(result.direction).toBeNull();
    expect(result.velocity).toBe(0);
    expect(result.vxvy).toEqual([0, 0]);
    expect(result.distance).toBe(0);
  });

  it("should handle the case when only x-coordinate changes", () => {
    const source: [number, number] = [0, 0];
    const target: [number, number] = [5, 0];
    const duration = 100;

    const result = movement(source, target, duration);

    expect(result.source).toEqual(source);
    expect(result.target).toEqual(target);
    expect(result.deltaX).toBe(5);
    expect(result.deltaY).toBe(0);
    expect(result.absX).toBe(5);
    expect(result.absY).toBe(0);
    expect(result.direction).toBe("right");
    expect(result.velocity).toBe(0.05);
    expect(result.vxvy).toEqual([0.05, 0]);
    expect(result.distance).toBe(5);
  });

  it("should handle the case when only y-coordinate changes", () => {
    const source: [number, number] = [0, 0];
    const target: [number, number] = [0, -5];
    const duration = 100;

    const result = movement(source, target, duration);

    expect(result.source).toEqual(source);
    expect(result.target).toEqual(target);
    expect(result.deltaX).toBe(0);
    expect(result.deltaY).toBe(-5);
    expect(result.absX).toBe(0);
    expect(result.absY).toBe(5);
    expect(result.direction).toBe("up");
    expect(result.velocity).toBe(0.05);
    expect(result.vxvy).toEqual([0, -0.05]);
    expect(result.distance).toBe(5);
  });
});
