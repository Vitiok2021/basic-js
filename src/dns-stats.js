const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let i = 0; i < domains.length; i += 1) {
    const reversedDomains = domains[i].split(".").reverse();
    let currentDns = "";
    for (let k = 0; k < reversedDomains.length; k += 1) {
      currentDns += "." + reversedDomains[k];
      if (res[currentDns] && res[currentDns] !== undefined) {
        res[currentDns] += 1;
      } else {
        res[currentDns] = 1;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats,
};
