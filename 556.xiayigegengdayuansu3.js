/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let arr = n.toString().split('');
    let len = arr.length;
    let i = len - 2;
    // 步骤1：找第一个 arr[i] < arr[i+1]
    while (i >= 0 && arr[i] >= arr[i+1]) {
        i--;
    }
    if (i < 0) return -1; // 整体降序，无更大排列

    // 步骤2：找i后面第一个比arr[i]大的j
    let j = len - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }
    // 交换i j
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // 步骤3：反转i之后的部分
    let l = i + 1, r = len - 1;
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }

    let res = parseInt(arr.join(''));
    // 32位有符号int上限 2^31 -1
    return res > 2147483647 ? -1 : res;
};