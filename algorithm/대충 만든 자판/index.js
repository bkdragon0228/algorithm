function solution(keymap, targets) {
  const answer = [];
  const myMap = new Map();

  for (let key of keymap) {
    for (let i = 0; i < key.length; i += 1) {
      if (!myMap.has(key[i])) {
        myMap.set(key[i], i + 1);
      } else {
        if (myMap.get(key[i]) > i + 1) {
          myMap.set(key[i], i + 1);
        }
      }
    }
  }

  for (let target of targets) {
    let sum = 0;
    for (let t of target) {
      sum += myMap.get(t);
    }

    answer.push(!sum ? -1 : sum);
  }

  return answer;
}
