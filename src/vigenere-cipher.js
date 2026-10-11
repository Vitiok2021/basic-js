const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let m = message[i].charCodeAt(0);
        let k = key[keyIndex % key.length].charCodeAt(0);
        let shift = (m - 65 + k - 65) % 26;
        result.push(String.fromCharCode(shift + 65));
        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }
    return this.isDirect ? result.join("") : result.reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let m = message[i].charCodeAt(0);
        let k = key[keyIndex % key.length].charCodeAt(0);
        let shift = (m - 65 - (k - 65) + 26) % 26;
        result.push(String.fromCharCode(shift + 65));
        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }
    return this.isDirect ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
