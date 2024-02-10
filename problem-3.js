/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums) {
  const result = [];
  const n = nums.length;
  
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < n - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    let left = i + 1;
    let right = n - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

// Example usage:
const input = [1, -1, -1, 0];
console.log(threeSum(input));//[-1,0,1]