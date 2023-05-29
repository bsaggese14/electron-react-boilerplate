import { generateRandomString } from "./generateRandomString";

describe("generateRandomString", () => {
  test("length", () => {
    expect(generateRandomString().length).toBe(15);
  });
});
