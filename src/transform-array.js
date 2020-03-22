module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw Error;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '--discard-prev':
                newArr.pop();
                break;
            case '--discard-next':
                i++;
                break;
            case '--double-prev':
                if (i - 1 >= 0) newArr.push(arr[i - 1]);
                break;
            case '--double-next' :
                if (i + 2 <= arr.length) newArr.push(arr[i + 1]);
                break;
            default:
                newArr.push(arr[i]);
        }
    }
    return newArr;
};
