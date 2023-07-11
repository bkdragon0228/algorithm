function solution1(arr) {
  const result = [];

  for (let current of arr) {
    let score = 1;

    for (let i = 0; i < arr.length; i += 1) {
      if (current < arr[i]) {
        score += 1;
      }
    }

    result.push(score);
  }

  return result;
}

console.log(solution1([87, 89, 92, 100, 76]));
