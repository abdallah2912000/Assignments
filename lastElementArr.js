let arr1 = [1, 2, null, undefined, "abdo"];

Array.prototype.last = function () {
  if (this.length >= 0 && this.length <= 1000) {
    if (this.length === 0) return undefined;
    return this[this.length - 1];
  } else {
    throw new SyntaxError("Array length should 0 <= Array.length <= 1000");
  }
};

console.log(arr1.last());
