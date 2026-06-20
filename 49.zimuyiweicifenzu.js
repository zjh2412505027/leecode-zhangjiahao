/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (const str of strs) {
        // 将字符串按字符排序，作为哈希表的键
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    // 返回哈希表中所有的值（异位词分组）
    return Array.from(map.values());
};