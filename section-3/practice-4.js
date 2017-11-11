'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   let result1=[];
    for (let i = 0; i < collectionA.length; i++) {
        if (collectionA[i].length > 1) {
            for (let j = 0; j < parseInt(collectionA[i][2]); j++) {
                result1.push(collectionA[i][0]);
            }
        }
        else {
            result1.push(collectionA[i]);
        }
    }

  let result =[];
    let temp=0;

    for (let i = 0; i < result1.length; i++) {
        temp += 1;
        if (result1[i] !== result1[i + 1]) {
            result.push({key: result1[i], count: temp})
            temp = 0;
        }
    }

    let collectionB=objectB.value;
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
