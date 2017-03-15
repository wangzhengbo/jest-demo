const sum = require('./sum');

// var React = require('react');

test('adds 1 + 2 to equal 3', () => {
    const a = () => 2;
    console.log(a());
  expect(sum(1, 2)).toBe(3);
});