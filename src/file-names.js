const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!Array.isArray(names)) return [];
  let arr = [];
  for (let i = 0; i < names.length; i += 1) {
    let currentName = names[i];
    if (!arr.includes(currentName)) {
      arr.push(currentName);
    } else {
      let sufix = 1;
      let newName = `${currentName}(${sufix})`;
      while (arr.includes(newName)) {
        sufix += 1;
        newName = `${currentName}(${sufix})`;
      }
      arr.push(newName);
    }
  }
  return arr;
}

module.exports = {
  renameFiles,
};
