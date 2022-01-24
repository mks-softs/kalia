module.exports = function kalia(string) {
    if (typeof string !== "string") throw new TypeError("kalia wants a string!");
    return string.replace(/\s/g, "");
  };
  