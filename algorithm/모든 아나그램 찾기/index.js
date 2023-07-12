function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }

  return true;
}

function solution1(str, target) {
  let answer = 0;

  let tMap = new Map();
  let sMap = new Map();

  for (let s of target) {
    if (!tMap.has(s)) {
      tMap.set(s, 1);
    } else {
      tMap.set(s, tMap.get(s) + 1);
    }
  }

  let k = target.length - 1;

  for (let i = 0; i < k; i += 1) {
    if (!sMap.has(str[i])) {
      sMap.set(str[i], 1);
    } else {
      sMap.set(str[i], sMap.get(str[i]) + 1);
    }
  }

  for (let i = k; i < str.length; i += 1) {
    if (!sMap.has(str[i])) {
      sMap.set(str[i], 1);
    } else {
      sMap.set(str[i], sMap.get(str[i]) + 1);
    }

    if (compareMap(sMap, tMap)) {
      answer += 1;
    }

    sMap.set(str[i - k], sMap.get(str[i - k]) - 1);

    if (!sMap.get(str[i - k])) {
      sMap.delete(str[i - k]);
    }
  }

  return answer;
}

a = "bacaAacba";
b = "abc";
console.log(solution1(a, b));
