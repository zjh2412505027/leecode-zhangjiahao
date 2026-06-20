/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // 统计频次
    let map = new Map();
    for (let w of words) {
        map.set(w, (map.get(w) || 0) + 1);
    }
    // 排序：频次降序；频次相同则字典升序
    let arr = Array.from(map.entries());
    arr.sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
    })
    // 取前k个单词
    return arr.slice(0, k).map(item => item[0]);
};