/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let twoSum = (nums, target)=>{
    const newArr = new Map()
    for (let index = 0; index < nums.length; index++) {
        if(newArr.has(nums[index])){
            return [newArr.get(nums[index]), index]
        }else{
            let compliment = target - nums[index]
            newArr.set(compliment, index)
        }
    }
    return newArrd
}

console.log(twoSum([2, 2, 3], 5))
