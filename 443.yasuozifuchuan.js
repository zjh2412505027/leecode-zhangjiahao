/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIndex = 0; // 用于记录写入的位置
    let readIndex = 0; // 用于遍历读取原数组
    const n = chars.length;

    while (readIndex < n) {
        let currentChar = chars[readIndex];
        let count = 0;

        // 统计当前字符的连续出现次数
        while (readIndex < n && chars[readIndex] === currentChar) {
            readIndex++;
            count++;
        }

        // 写入当前字符
        chars[writeIndex] = currentChar;
        writeIndex++;

        // 次数大于1时，把次数的每一位写入数组
        if (count > 1) {
            const countStr = count.toString();
            for (let c of countStr) {
                chars[writeIndex] = c;
                writeIndex++;
            }
        }
    }

    return writeIndex;
};