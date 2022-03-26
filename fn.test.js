const fn = require('./fn');

test('이거 에러 나나요?', () => {
  expect(() => fn.throwErr()).toThrow('xx');
});
