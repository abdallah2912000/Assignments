Array.prototype.reducer = function (fn, init = 0) {
  if (!(this.length >= 0 && this.length <= 1000))
    throw new TypeError("Length should be between 0:1000");
  if (!(init >= 0 && init <= 1000))
    throw new TypeError("Initial Value should be between 0:1000");
  if (this.length === 0) return init;
  let val;
  if (init === 0) {
    val = this[0];
  } else {
    val = init;
  }
  for (let i = 0; i < this.length; i++) {
    val = fn(val, this[i]);
  }

  return val;
};

let arr = [1, 2, 3, 4];
let a = arr.reducer((acc, curr) => {
  return acc + curr * curr;
}, 100);
console.log(a);

let num = [];

let b = num.reducer((acc, curr) => {
  return acc + curr * curr;
}, 25);

console.log(b);
