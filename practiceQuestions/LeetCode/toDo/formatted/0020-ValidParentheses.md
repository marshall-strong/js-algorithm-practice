# 20. Valid Parentheses

<https://leetcode.com/problems/valid-parentheses/>

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Example 1

### Input 1

    s = "()"

### Output 1

    true

## Example 2

### Input 2

    s = "()[]{}"

### Output 2

    true

## Example 3

### Input 3

    s = "(]"

### Output 3

    false

## Constraints

- `1 <= s.length <= 10`<sup>4</sup>
- `s` consists of parentheses only `'()[]{}'`.
