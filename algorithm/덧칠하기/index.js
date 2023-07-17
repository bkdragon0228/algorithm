function solution(n, m, section) {
  let answer = 0;

  let last = 0;

  for (let x of section) {
    if (x >= last) {
      last = x + m;
      answer += 1;
    }
  }

  return answer;
}
