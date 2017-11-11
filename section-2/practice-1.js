'use strict';

module.exports = function countSameElements(collection) {
    let result = [];

    for (let i = 0; i < collection.length; i++) {
        let elem = existKey(collection[i], result);

        if (elem) {
            elem.count++;
        }
        else {
            result.push({"key": collection[i], "count": 1});
        }
    }

    return result;
};

function existKey(key, Array) {
    for (let j = 0; j < Array.length; j++) {
        if (Array[j].key === key) {

            return Array[j];
        }
    }

}
