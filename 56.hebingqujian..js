/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 按区间左端点排序
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [];
    for (const interval of intervals) {
        // 结果为空 或 当前区间和最后一个区间不重叠
        if (res.length === 0 || interval[0] > res[res.length - 1][1]) {
            res.push(interval);
        } else {
            // 重叠，更新右端点
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
        }
    }
    return res;
};
