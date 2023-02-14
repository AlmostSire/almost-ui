
function deepClone (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    // 初始化返回的结果
    let result;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    };

    for (let key in result) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result
}