// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */

// https://www.youtube.com/watch?v=PbsNVXacaVU&list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma&index=1

// Solve as a graph problem. It's a grid, so use an adjacency matrix (not a list)
// Traverse each cell (node) in the grid, and do a Depth First Search from
//  each node (cell) to find where all of the land is.
// To avoid searching nodes that have already been traversed, create an auxillary
//  array to keep track of which cells have been visited.

// helper function -- returns the cells adjacent to the current cell, but
//  only if they have not already been traversed
const getAdjacentCells = (i, j, grid, visited) => {
  const adjacentCells = [];

  const north = [i - 1, j];
  const south = [i + 1, j];
  const east = [i, j + 1];
  const west = [i, j - 1];

  // for each direction, checks if `i` and `j` values are valid & if the cell has been visited
  if (i - 1 >= 0 && !visited[i - 1][j]) adjacentCells.push(north);
  if (i + 1 < grid.length && !visited[i + 1][j]) adjacentCells.push(south);
  if (j + 1 < grid[i].length && !visited[i][j + 1]) adjacentCells.push(east);
  if (j - 1 >= 0 && !visited[i][j - 1]) adjacentCells.push(west);

  return adjacentCells;
};

// helper function -- Depth First Search
// returns `true` if `grid[i][j]` is a new island
const dFS = (i, j, grid, visited) => {
  const stack = [[i, j]];

  // tracks the size of the island currently being searched
  let islandSize = 0;

  while (stack.length > 0) {
    let currentNode = stack.pop();
    let [i, j] = currentNode;

    // checks if `grid[i][j]` has already been visted...
    //   if it has, move on
    if (visited[i][j] === true) continue;

    //   update the auxillary array to track that the cell has been visited
    visited[i][j] = true;

    //   checks if cell is part of an island...
    //     if cell contains water, move on
    if (grid[i][j] === "0") continue;
    //     if cell contains land...
    //       increment `islandSize`
    islandSize++;
    //       check adjacent cells...
    let adjacentCells = getAdjacentCells(i, j, grid, visited);
    //         pushes adjacent cells onto the stack, as long as they haven't already been traversed
    stack.push(...adjacentCells);
  }

  // Once the node has been searched, checks if an island was found
  if (islandSize > 0) {
    return true;
  } else {
    return false;
  }
};

var numIslands = function (grid) {
  // creates the auxillary array, which is a copy of the `grid` parameter but with all cells initialized to `false`
  const visited = grid.map((row) => row.map((cell) => false));

  let islandCount = 0;

  // traverses the grid and runs the helper function on each node
  // increments `islandCount` each time a new island is found
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dFS(i, j, grid, visited)) islandCount++;
    }
  }

  return islandCount;
};

// Success
// Runtime: 325 ms, faster than 5.91% of JavaScript online submissions for Number of Islands.
// Memory Usage: 62.9 MB, less than 9.71% of JavaScript online submissions for Number of Islands.
