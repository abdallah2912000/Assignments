let n = 10;

counter = (num) => {
  let init = num - 1;
  let arr = [];
  const value = () => {
    init += 1;
    arr.push(init);
    return arr;
  };
  if (!(num >= -1000 && num <= 1000))
    throw new TypeError("-1000 <= number <= 1000");
  if (!(arr.length >= 0 || arr.length <= 1000))
    throw new TypeError("0 <= calls.length <= 1000");
  return value;
};

const init = counter(n);
init();
init();
init();
init();
init();
let value = init();
console.log(value);
console.log(value[0]);
console.log(value[1]);
