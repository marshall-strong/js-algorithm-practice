# 49. Group Anagrams

<https://leetcode.com/problems/group-anagrams/>

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example 1

### Input 1

    strs = ["eat","tea","tan","ate","nat","bat"]

### Output 1

    [["bat"],["nat","tan"],["ate","eat","tea"]]

## Example 2

### Input 2

    strs = [""]

### Output 2

    [[""]]

### Input 3

    strs = ["a"]

### Output 3

    [["a"]]

## Constraints

- `1 <= strs.length <= 10`<sup>4</sup>
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.
