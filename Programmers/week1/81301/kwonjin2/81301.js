function solution(s) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let helper = "";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      helper += s[i];
      if (numberWords.includes(helper)) {
        result += numberWords.indexOf(helper);
        helper = "";
      }
    } else {
      result += s[i];
    }
  }

  return +result;
}
