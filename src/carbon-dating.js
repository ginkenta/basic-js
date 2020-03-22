const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(arg) {
  if(typeof arg !== 'string') return false;
  else {  
    let floatNum = parseFloat(arg);
    if (floatNum > 0 && floatNum < MODERN_ACTIVITY) {
      return Math.ceil(Math.log(MODERN_ACTIVITY/floatNum) * HALF_LIFE_PERIOD/0.693);
    }
  }
  return false;
};
