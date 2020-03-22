module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let len = 1;
      for (let i of arr) {
        if(Array.isArray(i)) {
          const lenNewArr = Math.max(this.calculateDepth(i)+1,2);
          if(lenNewArr > len) len = lenNewArr;
        }
      }
      return len;
    }
};