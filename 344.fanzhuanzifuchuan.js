/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        // 左右指针交换元素
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};