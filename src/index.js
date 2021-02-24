module.exports = function check(str, bracketsConfig) {
  let openBracket = '', closeBracket = '';
  let isUsed = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket += bracketsConfig[i][0];
    closeBracket += bracketsConfig[i][1];
    isUsed[i] = false;
  }

  let stack = [];
  for (let bracket of str) {

    let j = openBracket.indexOf(bracket);

    if (j >= 0) {
      if (openBracket[j] != closeBracket[j]) {
        stack.push(openBracket[j]);
      } else {
        if (!isUsed[j]) {
          stack.push(openBracket[j]);
          isUsed[j] = true;
        } else {
          temp = stack.pop();
          if (openBracket.indexOf(temp) != closeBracket.indexOf(bracket)) {
            return false;
          } else {
            isUsed[closeBracket.indexOf(bracket)] = false;
          }
        }
      }

    } else {
      temp = stack.pop();
      if (openBracket.indexOf(temp) != closeBracket.indexOf(bracket)) {
        return false;
      } else {
        isUsed[closeBracket.indexOf(bracket)] = false;
      }
    }
  }

  return (stack.length == 0);
}
