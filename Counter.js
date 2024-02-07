let n = 10;

counter = function (init, counter) {
  let calls = [init];
  if (isNaN(init)) throw new TypeError("input must be integer number");
  for (let i = 0; i < counter; i++) {
    init++;
    calls.push(init);
  }
  return calls;
};

console.log(counter(10, 5));
