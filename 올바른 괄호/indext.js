function solution1(str) {
  const stack = [];

  for (let s of str) {
    if (s === "(") {
      stack.push(s);
    } else {
      if (!stack.length) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length ? "NO" : "YES";
}

let a = "(()(()))(()";
console.log(solution1(a));
