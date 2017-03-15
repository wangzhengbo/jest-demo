const hello = require('./hello');


test('Say hello to jest.', () => {
  expect(hello()).toBe('Hello jest!');
});

test('Say hell to world.', () => {
  expect(hello('world')).toBe('Hello world!');
});