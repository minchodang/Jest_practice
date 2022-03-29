// mock function

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test('한 번 이상 호출?', () => {
  expect(mockFn).toBeCalled();
});

test('정확히 세번 호출?', () => {
  expect(mockFn).toBeCalledTimes(3);
});
test('10이랑 20 전달 답은 함수가 있는가?', () => {
  expect(mockFn).toBeCalledWith(30, 40);
});
test('마지막 함수는 30이랑 40ㅇ 받았음?', () => {
  expect(mockFn).lastCalledWith(30, 40);
});
