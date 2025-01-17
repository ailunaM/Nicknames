// test("", () => {});
import { Validator } from "../nicknames";

test("The name must not contain more than three consecutive digits", () => {
  const user = new Validator();
  const result = user.validateUsername("user333Name");
  expect(result).toBe(false);
});
test("only Latin letters", () => {
  const user = new Validator();
  const result = user.validateUsername("Лана");
  expect(result).toBe(false);
});
test("should not start with numbers", () => {
  const user = new Validator();
  const result = user.validateUsername("1userName");
  expect(result).toBe(false);
});
test("should not end in numbers", () => {
  const user = new Validator();
  const result = user.validateUsername("userName2");
  expect(result).toBe(false);
});
test("must not end or begin with a dash", () => {
  const user = new Validator();
  const result = user.validateUsername("-userName-");
  expect(result).toBe(false);
});
test("should not end or begin with an underscore", () => {
  const user = new Validator();
  const result = user.validateUsername("_userName_");
  expect(result).toBe(false);
});
test("correct nickname", () => {
  const user = new Validator();
  const result = user.validateUsername("u_ser-N3me");
  expect(result).toBe(true);
});
