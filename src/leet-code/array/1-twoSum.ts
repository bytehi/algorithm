/**
 * 1. 两数之和
 * @description 方案1 哈希表法 - 数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum1(nums: number[], target: number): any {
  let arr = [];
  let i = 0, len = nums.length;

  while (i < len) {
    let num = target - nums[i];
    if (arr[num] !== undefined) {
      return [arr[num], i]
    }
    arr[nums[i]] = i
    i++
  }
  return null;
};


/**
 * 1. 两数之和
 * @desciprtion 方案2 哈希表法 - 对象
 * @link https://leetcode-cn.com/problems/two-sum/
 * @param nums
 * @param target
 * @returns
 */

export function twoSum2(nums: number[], target: number): any {
  const map: any = {};                    // 存储出现过的数字，和对应的索引
  for (let i = 0; i < nums.length; i++) { // 遍历元素
    const targetNum: number = target - nums[i];    // 满足要求的目标元素
    // 在map中获取目标元素的索引
    if (map[targetNum] !== undefined) {   // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [map[targetNum], i];
    } else {                              // 如果不存在，说明之前没出现过目标元素
      map[nums[i]] = i;               // 存入当前的元素和对应的索引
    }
  }
}

const arr = [1, 3, 5, 6, 7, 8, 9]
console.log('twoSum2: ', twoSum2(arr, 12))
console.log('—————————————— twoSum2 ——————————————')


/**
 * 1. 两数之和
 * @desciprtion 方案3 哈希表法 - map
 *
 * 时间复杂度 O(N)
 * 空间复杂度 O(N)
 *
 * 思路：
 * 1.用map来存放{数组元素值，坐标}这样的键值对
 * 2.运用逆向解法，即用target减去数组中的某个元素，然后来判断map中是否有相同的值，若有则存在满足条件的答案，返回两个坐标即可；若没有，则保存{数组中某个元素值，对应的坐标}到map对象中。依次遍历即可判断是否有满足条件的两个元素。
作者：bertil
链接：https://leetcode-cn.com/problems/two-sum/solution/qiao-yong-jszhong-de-mapdui-xiang-by-ber-qegl/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

export function twoSum3(nums: number[], target: number): any {
  const map = new Map()
  const len = nums.length
  let i = 0;

  while (i < len) {
    const x = target - nums[i]
    if (map.has(x)) {
      return [map.get(x), i]
    }
    // cache value:index
    map.set(nums[i], i)
    i++
  }
}

// 功能测试
console.log('twoSum3: ', twoSum3(arr, 12))
console.log('—————————————— twoSum3 ——————————————')


/**
 * 1. 两数之和
 * @description 方案4 哈希表法 - 使用pop, indexOf
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum4(nums: number[], target: number): any {
  let len = nums.length;
  if (!len) return nums;

  while (len > 1) {
    const last: any = nums.pop();
    const numIndex = nums.indexOf(target - last)
    if (numIndex > -1) {
      return [numIndex, nums.length]
    }
    len--
  }
};

// 功能测试
console.log('twoSum4: ', twoSum4(arr, 12))
console.log('—————————————— twoSum4 ——————————————')


/**
 * 1. 两数之和
 * @description 方案5 暴力枚举
 * @link https://leetcode-cn.com/problems/two-sum/solution/wo-de-shua-ti-si-lu-yi-liang-shu-zhi-he-93ue6/
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 */
export function twoSum5(nums: number[], target: number): any {
  const len = nums.length;
  // O(n^2)
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

console.log('twoSum5: ', twoSum5(arr, 12))
console.log('—————————————— twoSum5 ——————————————')
