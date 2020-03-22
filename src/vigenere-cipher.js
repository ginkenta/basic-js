class VigenereCipheringMachine {
    constructor(direct) {
        this.isReverse = (direct === false);
        this.code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    encrypt(message, key) {
      if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error();

      const keyRepeat = Math.ceil(message.length / key.length);
      const keys = key.toUpperCase().repeat(keyRepeat).split('');
      const encrypted = [];
      let index;

      for (let i = 0; i < message.length; i++) {
        index = this.code.indexOf(message[i].toUpperCase());
        if (index !== -1) {
            encrypted.push(this.code[this.code.indexOf(keys.shift()) + index]);
        } else {
            encrypted.push(message[i].toUpperCase());
        }
      }

      if (this.isReverse) return encrypted.reverse().join('');
      return encrypted.join('');
    }

    decrypt(message, key) {
      if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error();

      const keyRepeat = Math.ceil(message.length / key.length);
      const keys = key.toUpperCase().repeat(keyRepeat).split('');
      const decrypted = [];
      let index, newIndex;
  
      for (let i = 0; i < message.length; i++) {
        index = this.code.indexOf(keys[0]);
        newIndex = this.code.indexOf(message[i].toUpperCase());
  
        if (newIndex !== -1) {
          keys.shift();
          if (newIndex >= index) {
            decrypted.push(this.code[newIndex - index]);
          } else {
            decrypted.push(this.code[newIndex - index + 26]);
          }
        } else {
          decrypted.push(message[i].toUpperCase());
        }
      }

      if (this.isReverse) return decrypted.reverse().join('');
      return decrypted.join('');
    }
}

module.exports = VigenereCipheringMachine;
