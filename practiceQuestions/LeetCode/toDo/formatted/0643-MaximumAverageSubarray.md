# 643. Maximum Average Subarray I

<https://leetcode.com/problems/maximum-average-subarray-i/>

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and return _this value_. Any answer with a calculation error less than `10`<sup>-5</sup> will be accepted.

## Example 1

### Input 1

    nums = [1,12,-5,-6,50,3], k = 4

### Output 1

    12.75000

### Explanation 1

    Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

## Example 2

### Input 2

    nums = [5], k = 1

### Output 2

    5.00000

## Constraints

- `n == nums.length`
- `1 <= k <= n <= 10`<sup>5</sup>
- `-10`<sup>4</sup>` <= nums[i] <= 10`<sup>4</sup>
