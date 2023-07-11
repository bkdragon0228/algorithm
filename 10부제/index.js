// 1
function solution1(day, arr) {
  const answer = arr.map((e) => e % 10).filter((e) => e === day).length;
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution1(3, arr)); // 3

// 2
function solution2(day, arr) {
  let count = 0;

  for (let x of arr) {
    if (
      x
        .toString()
        .split("")
        .some((e) => e == day)
    ) {
      count += 1;
    }
  }

  return count;
}

console.log(solution2(3, arr)); // 3
