'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result=collectionA;
    let collectionB=objectB.value;
    for(let i = 0; i<collectionB.length ; i++)
    {
        for(let j = 0; j<collectionA.length ; j++)
        {
            if (collectionA[j].key === collectionB[i])
            {
                collectionA[j].count -= 1;

            }
        }
    }
    return result;

}
