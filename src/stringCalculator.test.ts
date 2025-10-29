import { describe, it, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself if it is a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it("should return the sum of two comma separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("5,6")).toBe(11);
  });

  it("should return the sum of multiple comma separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("5,6,7")).toBe(18);
  });

  it("Adding numbers separated by new lines should return the sum of the numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("5\n6\n7")).toBe(18);
  });

  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//;\n1;2;3")).toBe(6);
  });

  it("should throw an error for neagitive numbers", () => {
    expect(() => add("1,-2")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2,-3");
  });
});
