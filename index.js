module.exports = function kalya(string) {
    if (typeof string !== "string") throw new TypeError("Kalya wants a string!");
    return string.replace(/\s/g, "");
  };
  