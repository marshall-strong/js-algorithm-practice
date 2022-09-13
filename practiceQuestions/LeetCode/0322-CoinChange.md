# 322. Coin Change

<https://leetcode.com/problems/coin-change/>

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return _the fewest number of coins that you need to make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

## Example 1

### Input 1

    coins = [1,2,5], amount = 11

### Output 1

    3

### Explanation 1

The minimum number of coins required to make `11` cents is `3`.
11 = 5 + 5 + 1

## Example 2

### Input 2

    coins = [2], amount = 3

### Output 2

    -1

### Explanation 2

It is impossible to return `3` cents with only a `2` cents coin, so `-1` is returned.

## Example 3

### Input 3

    coins = [1], amount = 0

### Output 3

    0

### Explanation 3

If asked to return `0` cents, return `0` coins.

## Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 104`
