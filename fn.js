const fn = {
  add: (num1, num2) => num1 + num2,

  createUser: (name) => {
    console.log('실제로 사용자가 생성되었습니다.');
    return {
      name,
    };
  },

  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: 'Mike',
          age: 30,
          gender: 'male',
        });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: 'bmw',
          name: 's5',
          color: 'black',
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

module.exports = fn;
