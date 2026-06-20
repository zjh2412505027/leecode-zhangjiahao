/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function(paths) {
    // 字典树节点定义
    class TrieNode {
        constructor() {
            this.children = new Map();
            this.isDel = false;
        }
    }

    const root = new TrieNode();
    // 1. 把所有路径插入字典树
    for (const path of paths) {
        let cur = root;
        for (const name of path) {
            if (!cur.children.has(name)) {
                cur.children.set(name, new TrieNode());
            }
            cur = cur.children.get(name);
        }
    }

    const hashMap = new Map();

    // 2. 后序遍历，对子树序列化，统计重复
    const dfsSerialize = (node) => {
        const childParts = [];
        for (const [name, child] of node.children) {
            const subStr = dfsSerialize(child);
            childParts.push(`${name}(${subStr})`);
        }
        const key = childParts.join(',');
        if (key) {
            if (!hashMap.has(key)) hashMap.set(key, []);
            hashMap.get(key).push(node);
        }
        return key;
    };
    dfsSerialize(root);

    // 3. 标记重复子树待删除
    for (const [_, nodeList] of hashMap) {
        if (nodeList.length > 1) {
            for (const nd of nodeList) nd.isDel = true;
        }
    }

    const res = [];
    // 4. 遍历收集未删除路径
    const collect = (node, pathArr) => {
        for (const [name, child] of node.children) {
            if (child.isDel) continue;
            pathArr.push(name);
            res.push([...pathArr]);
            collect(child, pathArr);
            pathArr.pop();
        }
    };
    collect(root, []);

    return res;
};