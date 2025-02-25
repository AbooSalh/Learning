const theSum = require("../sum");
test("return the number", () => {
  expect(theSum(10)).toBe(10);
});

test("return the number1 + number2", () => {
  expect(theSum(15, 25)).toBe(40);
});
