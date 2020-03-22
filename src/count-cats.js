module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach( arr => {
    arr.forEach( el => {
      if(el === '^^') count++;
    })
  })
  return count;
};
