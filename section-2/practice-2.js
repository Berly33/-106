'use strict';

module.exports = function countSameElements(collection) {
    let result = [];

    for (let i = 0; i < collection.length; i++) {
        result = isExist(collection[i], result);
    }

    return result;
};
function isExist(element, result) {
    let keyCount = element.split("-");
    let key = keyCount.length == 1 ? element : keyCount[0];
    let count = keyCount.length == 1 ? 1 : keyCount[1];

    for (let i = 0; i < result.length; i++) {
        if (result[i].key == key) {
            result[i].count += parseInt(count);

            return result;
        }
    }
    result.push({"key": key, "count": parseInt(count)});
    return result;
}


