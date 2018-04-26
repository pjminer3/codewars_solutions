// const clearSurroundingArea = (grid, x, y) => {
//   if (grid[x - 1]) clearIsland(grid, x - 1, y);
//   if (grid[x][y - 1]) clearIsland(grid, x, y - 1);
//   if (grid[x + 1]) clearIsland(grid, x + 1, y);
//   if (grid[x][y + 1]) clearIsland(grid, x, y + 1);
// }

const clearIsland = (grid, x, y) => {
  if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1 || grid[x][y] === "0") return;

  grid[x][y] = "0";

  clearIsland(grid, x - 1, y);
  clearIsland(grid, x, y - 1);
  clearIsland(grid, x + 1, y);
  clearIsland(grid, x, y + 1);
};

const numIslands = (grid) => {
  let total = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === "1") {
        total ++;
        clearIsland(grid, x, y);
      } 
    }
  }

  return total;
};

let area = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

console.log(numIslands(area)); // 3

