function solution1(need, plan) {
  const queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }

  if (queue.length) return "NO";

  return "YES";
}

console.log(solution1("CBA", "CBDAGE"));
