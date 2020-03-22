const chainMaker = {
  result:[],
  getLength() {
    return this.result.length;
  }, 
  addLink(value) {
    if(value === undefined) this.result.push(' ');
    else this.result.push(value);
    return this;
  },
  removeLink(p) {
    if(p <= 0 || !Number.isInteger(p) || p >= this.result.length) {
      this.result = [];
      throw new Error();
    }
    this.result.splice(p-1,1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let strResult = '';
    for(let i = 0; i < this.result.length; i++){
      strResult += `( ${this.result[i]} )`;
      if(i < this.result.length - 1) strResult += '~~'
    }
    this.result = [];
    return strResult;
  }
};

module.exports = chainMaker;


