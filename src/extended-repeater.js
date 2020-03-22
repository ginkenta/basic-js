module.exports = function repeater(str, option) {
    let result = '';
    let {
      repeatTimes = 1, 
      separator = '+', 
      addition = '', 
      additionRepeatTimes = 1, 
      additionSeparator = '',
    } = option;
    for(let i = 0; i < repeatTimes; i++){
      let additionStr = '';
      if(additionRepeatTimes){
        for(let j = 0; j < additionRepeatTimes; j++){
           additionStr += addition;
           if(repeatTimes >= 1 && additionSeparator && j < additionRepeatTimes-1) additionStr+= additionSeparator;
        }
       result +=str + additionStr
      }
      if(i<repeatTimes-1) result +=  separator;
    }
    return result;
};
  