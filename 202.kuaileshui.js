/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 计算每个数位平方和
    const getSum = (x) => {
        let sum = 0
        while(x) {
            let d = x % 10
            sum += d * d
            x = Math.floor(x / 10)
        }
        return sum
    }
    let slow = n
    let fast = getSum(n)
    // 快指针一次走两步，慢指针一步，相遇时判断是否为1
    while(fast !== 1 && slow !== fast) {
        slow = getSum(slow)
        fast = getSum(getSum(fast))
    }
    return fast === 1
};