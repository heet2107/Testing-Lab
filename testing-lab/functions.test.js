const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions')

//We set up a unit test using the following syntax:
test('returns 2', () => {
  expect(returnTwo()).toEqual(2)
})

test('Hello Greeting', () => {
    expect(greeting('James')).toEqual("Hello, James."),
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

// test('Adds number', () => {
//     expect(add(1, 2)).toEqual(3),
//     expect(add(5, 9)).toEqual(14)
// })

// test('subtract number', () => {
//   expect(subtract(17, 9)).toEqual(8),
//   expect(subtract(15, 30)).toEqual(-15)
// })

// test('multiply number', () => {
//   expect(multiply(1, 0)).toEqual(0),
//   expect(multiply(9, 9)).toEqual(81)
// })

// test('divide number', () => {
//   expect(divide(18, 3)).toEqual(6),
//   expect(divide(525, 25)).toEqual(21)
// })

describe("Math Functions", () => {
    test('Adds number', () => {
      expect(add(1, 2)).toEqual(3),
      expect(add(5, 9)).toEqual(14)
  });

  test('subtract number', () => {
    expect(subtract(17, 9)).toEqual(8),
    expect(subtract(15, 30)).toEqual(-15)
  });

  test('multiply number', () => {
    expect(multiply(1, 0)).toEqual(0),
    expect(multiply(9, 9)).toEqual(81)
  });

  test('divide number', () => {
    expect(divide(18, 3)).toEqual(6),
    expect(divide(525, 25)).toEqual(21)
  });
});