let n = 10;

counter = function (init, counter) {
  let calls = [init];
  if (isNaN(init)) throw new TypeError("input must be integer number");
  if (!(init >= -1000 && init <= 1000))
    throw new TypeError("Range must be between -1000 & 1000");
  if (!(counter >= 0 && counter <= 1000))
    throw new TypeError("Array length must be between 0 : 1000");
  for (let i = 0; i < counter - 1; i++) {
    init++;
    calls.push(init);
  }
  return calls;
};

console.log(counter(10, 10));
