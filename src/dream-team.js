const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let letters = [];
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === "string") {
      let cleanName = members[i].trim();
      letters.push(cleanName[0].toUpperCase());
    }
  }
  letters.sort();
  let res = letters.join("");
  return res;
}

module.exports = {
  createDreamTeam,
};
