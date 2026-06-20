/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    // 辅助函数：判断子串是否为回文
    const isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    };

    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            // 尝试删除左字符或右字符，只要一种情况满足即可
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};