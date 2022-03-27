const fn = require('./fn');

// resolves, rejects
test('3초 후 나이 30', async () => {
  // return fn.getAge().then((age) => {
  //   expect(age).toBe(30);
  // });
  await expect(fn.getAge()).resolves.toBe(30);
});
