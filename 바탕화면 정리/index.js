function solution(wallpaper) {
  const arr = [];
  const row = wallpaper.length;
  const column = wallpaper[0].length;

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      if (wallpaper[i][j] === "#") {
        arr.push([i, j]);
      }
    }
  }

  const rows = arr.map((e) => e[0]).sort((a, b) => a - b);
  const columns = arr.map((e) => e[1]).sort((a, b) => a - b);

  const answer = [
    rows[0],
    columns[0],
    rows[rows.length - 1] + 1,
    columns[columns.length - 1] + 1,
  ];

  return answer;
}
