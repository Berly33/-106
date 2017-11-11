'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   let result =[];
    let collectionB=objectB.value;
    let temp=0;

    for (let i = 0; i < collectionA.length; i++) {
        temp += 1;
        if (collectionA[i] !== collectionA[i + 1]) {
            result.push({key: collectionA[i], count: temp})
            temp = 0;
        }
    }
    for(let i = 0; i<collectionB.length ; i++)
    {
        for(let j = 0; j<result.length ; j++)
        {
            if (result[j].key === collectionB[i])
            {
                if (result[j].count /3>=1) {
                    result[j].count -= Math.floor(result[j].count/3);
                }
            }
        }
    }
    return result;
}
