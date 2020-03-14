module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(b => b.join(""));
  let index = 0;
  while (index !== brackets.length) {
      if (str.includes(brackets[index])) {
          str = str.replace(brackets[index], "");
          index = 0;
          continue;
      }
      index += 1;
  }
  return !Boolean(str);
};