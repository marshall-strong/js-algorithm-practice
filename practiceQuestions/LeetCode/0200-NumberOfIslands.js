// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */

// https://myinterview.guru/leetcode-200-number-of-islands-63b59ffa547f

// Just like before, we traverse the grid and do a depth first search on each cell.
// We can save time and space by mutating the input grid (careful!).
// Whether traversing the grid or doing DFS, a visited cell is effectively the
//  same as a water cell (continue on when traversing; stop searching in DFS).
// After a land cell ('1') is visited, the DFS function changes it to a '0'.

// recursive Depth First Search helper function
// Returns `false` if grid[x][y] contains water
// Returns `true` if grid[x][y] contains land, but not before searching recursively
//  in all four directions for any adjacent land, flipping any adjacent land
//  from `1` to `0` before moving on.
const recursiveDFS = (x, y, grid) => {
  // returns `false` if the `x` or `y` arguments are out of bounds
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length) return false;
  // returns `false` if grid[x][y] contains water
  if (grid[x][y] == "0") return false;
  // marks the land cell as visited by changing the value from `'1'` to `'0'`
  grid[x][y] = "0";
  // recursive calls to check for adjacent land in all four directions
  recursiveDFS(x - 1, y, grid); // north
  recursiveDFS(x + 1, y, grid); // south
  recursiveDFS(x, y + 1, grid); // east
  recursiveDFS(x, y - 1, grid); // west
  // returns `true` so that the main function will increment `islandCount`
  return true;
};

var numIslands = function (grid) {
  let islandCount = 0;

  // traverses the grid and runs the helper function on each node
  // increments `islandCount` each time a new island is found
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (recursiveDFS(x, y, grid)) islandCount++;
    }
  }

  return islandCount;
};

// Success
// Runtime: 78 ms, faster than 97.94% of JavaScript online submissions for Number of Islands.
// Memory Usage: 44.9 MB, less than 70.66% of JavaScript online submissions for Number of Islands.
