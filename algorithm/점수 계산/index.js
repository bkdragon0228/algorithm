function solution1(arr) {
  let result = 0;
  let score = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) {
      score += 1;
    }

    if (!arr[i]) {
      score = 0;
    }

    result += score;
  }

  return result;
}

console.log(solution1([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
