exports.getWidth = function (str, size) {
  const engReg = /[a-zA-Z0-9]/g;
  const engCount = (str.match(engReg) || []).length;

  return ((engCount * size) / 1.5) + ((str.length - engCount) * size);
};
