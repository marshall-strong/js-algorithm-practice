# 62. Unique Paths

<https://leetcode.com/problems/unique-paths/>

There is a robot on an `m` by `n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, _return the number of possible unique paths that the robot can take to reach the bottom-right corner_.

The test cases are generated so that the answer will be less than or equal to `2 * 10`<sup>9</sup>.

## Example 1

### Input 1

    m = 3, n = 7

### Output 1

    28

## Example 2

### Input 2

    m = 3, n = 2

### Output 2

    3

### Explanation 2

    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

## Constraints

- `1 <= m, n <= 100`
