function solution1(str, t) {
  const answer = [];
  let number = Number.MAX_SAFE_INTEGER;

  for (let s of str) {
    if (s === t) {
      number = 0;
    } else {
      number += 1;
    }

    answer.push(number);
  }

  number = Number.MAX_SAFE_INTEGER;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] === t) {
      number = 0;
    } else {
      number += 1;
    }

    answer[i] = Math.min(answer[i], number);
  }

  return answer;
}

console.log(solution1("teachermode", "e"));
