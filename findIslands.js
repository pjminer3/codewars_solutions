const clearSurroundingArea = (grid, x, y) => {
  if (grid[x - 1]) clearIsland(grid, x - 1, y);
  if (grid[x][y - 1]) clearIsland(grid, x, y - 1);
  if (grid[x + 1]) clearIsland(grid, x + 1, y);
  if (grid[x][y + 1]) clearIsland(grid, x, y + 1);
}

const clearIsland = (grid, x, y) => {

  
  if (!grid[x][y]) return;

  grid[x][y] = 0;
  clearSurroundingArea(grid, x, y);
};

const numIslands = (grid) => {
  let counter = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y]) {
        counter ++;
        clearIsland(grid, x, y);
      } 
    }
  }

  return counter;
};


