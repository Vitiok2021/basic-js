const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let mainStr = String(str);
  let addStr = "";
  if (options.addition !== undefined) {
    addStr = String(options.addition);
  }
  let sep = "+";
  if (options.separator !== undefined) {
    sep = String(options.separator);
  }
  let addSep = "|";
  if (options.additionSeparator !== undefined) {
    addSep = String(options.additionSeparator);
  }
  let repeatCount = 1;
  if (options.repeatTimes !== undefined) {
    repeatCount = options.repeatTimes;
  }
  let addRepeatCount = 1;
  if (options.additionRepeatTimes !== undefined) {
    addRepeatCount = options.additionRepeatTimes;
  }
  let addArr = [];
  for (let i = 0; i < addRepeatCount; i += 1) {
    addArr.push(addStr);
  }
  let fullAddition = addArr.join(addSep);
  let block = mainStr + fullAddition;
  let finalArr = [];
  for (let i = 0; i < repeatCount; i += 1) {
    finalArr.push(block);
  }
  return finalArr.join(sep);
}

module.exports = {
  repeater,
};
