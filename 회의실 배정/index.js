function solution1(meeting) {
  let answer = 0;

  const sortedMeeting = meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let endtime = 0;
  for (let [start, end] of sortedMeeting) {
    if (start >= endtime) {
      answer += 1;
      endtime = end;
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution1(arr));
