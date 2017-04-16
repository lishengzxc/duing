exports.getWidth = function (str, size) {
  let engReg = /[a-zA-Z0-9]/g;
  let engCount = (str.match(engReg) || []).length;

  return engCount * size / 1.5 + (str.length - engCount) * size;
}
