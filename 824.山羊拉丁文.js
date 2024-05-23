/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  return sentence
    .split(" ")
    .map((word, index) => {
      let newWord;
      if (["a", "e", "i", "o", "u"].includes(word[0].toLowerCase())) {
        newWord = word + "ma";
      } else {
        newWord = word.slice(1) + word[0] + "ma";
      }
      return (
        newWord +
        Array(index + 1)
          .fill("a")
          .join("")
      );
    })
    .join(" ");
};
console.log(
  toGoatLatin("I speak Goat Latin") === "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
);
console.log(
  toGoatLatin("The quick brown fox jumped over the lazy dog") ===
    "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
);
// @lc code=end
