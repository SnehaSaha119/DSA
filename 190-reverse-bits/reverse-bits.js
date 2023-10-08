/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

    let stringN = n.toString(2)

    while(stringN.length!=32){
        stringN = '0' + stringN
    }

    return parseInt(stringN.split('').reverse().join(''),2)
    
};