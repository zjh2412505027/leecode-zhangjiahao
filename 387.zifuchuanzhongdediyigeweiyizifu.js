var firstUniqChar = function(s) {
    // 1. 统计每个字符出现的次数
    const count = new Map();
    for (const ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    // 2. 再次遍历字符串，找到第一个出现次数为 1 的字符
    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }

    // 3. 没找到返回 -1
    return -1;
};