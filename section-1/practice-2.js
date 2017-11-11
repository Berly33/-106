'use strict';
module.exports =function collectSameElements(collectionA, collectionB) {

    let result = [];
        collectionB=collectionB[0];
        for(var i = 0; i<collectionA.length ; i++)
        {
            for(var j = 0; j<collectionB.length ; j++)
            {
                if (collectionA[i] == collectionB[j])
                {
                    result.push(collectionA[i]);
                    break;
                }
            }
        }
        return result;


}