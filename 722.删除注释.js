/*
 * @lc app=leetcode.cn id=722 lang=javascript
 *
 * [722] 删除注释
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let flag = false;
    const result = [];
    source.forEach((content) => {
        let str = content;
        if (flag) {
            str = str.replace('/*', '');
            if (str.includes('*/')) {
                flag = false;
            }
        }

        if (/\/\/.*/.test(str) && /\/\*.*\*\//.test(str)) {
            const index = str.indexOf('//');
            const matcher = str.match(/\/\*.*\*\//);
            if (index < matcher) {
                str = str.replace(/\/\/.*/, '');
            } else {
                str = str.replace(/\/\*.*\*\//, '');
            }
        }
        str = str.replace(/\/\/.*/g, '');
        if (str.includes('/*') && !str.includes('*/')) {
            flag = true;
        }

        return str;
    });
    return result.join('\n').replace(/\/\*(.|\n)*\*\//g, '').split('\n').filter(Boolean);
}

// console.log(removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]));
// console.log(removeComments(["a/*comment", "line", "more_comment*/b"]));
// console.log(removeComments(["main() {", "/* here is commments", "  // still comments */", "   double s = 33;", "   cout << s;", "}"]));
// console.log(removeComments(["void func(int k) {", "// this function does nothing /*", "   k = k*2/4;", "   k = k/2;*/", "}"]));
// console.log(removeComments(["main() {", "   int x = 1; // Its comments here", "   x++;", "   cout << x;", "   //return x;", "   x--;", "}"]));
console.log(removeComments(["main() {", "  Node* p;", "  /* declare a Node", "  /*float f = 2.0", "   p->val = f;", "   /**/", "   p->val = 1;", "   //*/ cout << success;*/", "}", " "]));
// console.log(removeComments(["a//*b//*c","blank","d/*/e*//f"]));
// @lc code=end

