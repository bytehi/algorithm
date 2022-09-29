/**
 * 26. 删除有序数组中的重复项
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 *
 * 题解：双指针
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/
 */
export function removeDuplicates(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0

  let fast = 1,
    slow = 1
  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
};

// 功能测试
console.log('removeDuplicates: ', removeDuplicates([1,1,2]))
console.log('removeDuplicates: ', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log('—————————————— removeDuplicates ——————————————')
