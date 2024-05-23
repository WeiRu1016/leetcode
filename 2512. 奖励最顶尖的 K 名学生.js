// 给你两个字符串数组 positive_feedback 和 negative_feedback ，分别包含表示正面的和负面的词汇。不会 有单词同时是正面的和负面的。

// 一开始，每位学生分数为 0 。每个正面的单词会给学生的分数 加 3 分，每个负面的词会给学生的分数 减  1 分。

// 给你 n 个学生的评语，用一个下标从 0 开始的字符串数组 report 和一个下标从 0 开始的整数数组 student_id 表示，其中 student_id[i] 表示这名学生的 ID ，这名学生的评语是 report[i] 。每名学生的 ID 互不相同。

// 给你一个整数 k ，请你返回按照得分 从高到低 最顶尖的 k 名学生。如果有多名学生分数相同，ID 越小排名越前。

 

// 示例 1：

// 输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
// 输出：[1,2]
// 解释：
// 两名学生都有 1 个正面词汇，都得到 3 分，学生 1 的 ID 更小所以排名更前。
// 示例 2：

// 输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
// 输出：[2,1]
// 解释：
// - ID 为 1 的学生有 1 个正面词汇和 1 个负面词汇，所以得分为 3-1=2 分。
// - ID 为 2 的学生有 1 个正面词汇，得分为 3 分。
// 学生 2 分数更高，所以返回 [2,1] 。
 

// 提示：

// 1 <= positive_feedback.length, negative_feedback.length <= 104
// 1 <= positive_feedback[i].length, negative_feedback[j].length <= 100
// positive_feedback[i] 和 negative_feedback[j] 都只包含小写英文字母。
// positive_feedback 和 negative_feedback 中不会有相同单词。
// n == report.length == student_id.length
// 1 <= n <= 104
// report[i] 只包含小写英文字母和空格 ' ' 。
// report[i] 中连续单词之间有单个空格隔开。
// 1 <= report[i].length <= 100
// 1 <= student_id[i] <= 109
// student_id[i] 的值 互不相同 。
// 1 <= k <= n

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
    positive_feedback = new Set(positive_feedback);
    negative_feedback = new Set(negative_feedback);

    return student_id.map((id, index) => {
        const content = report[index];
        const score = content.split(/\s+/).reduce((prev, word) => {
            if (positive_feedback.has(word)) {
                prev += 3;
            } else if (negative_feedback.has(word)) {
                prev -= 1;
            }
            return prev;
        }, 0);
        return { score, id };
    }).sort((p, n) => {
        if (p.score === n.score) {
            return p.id - n.id;
        }
        return n.score - p.score;
    }).slice(0, k).map(({ id }) => id);
};
// console.log(topStudents(["smart","brilliant","studious"], ["not"], ["this student is studious","the student is smart"], [1, 2], 2));
// [245764367,415068015,127263030,905556075]
// console.log(topStudents(
//     ["yewmhbgnq","vqhhuaejqw"],
//     ["zjeyq","oyuetqe","ks","vuvannpwa","qfd","xv","aauvtxrdt","gml","eaky","mwip"],
//     [
//         "lqiuderzod mwip vqhhuaejqw xrn aqjzkqjsi riuood yewmhbgnq xv nmcvqm onhkkmy",
//         "uccz yewmhbgnq rcxdaqicbe vqhhuaejqw yewmhbgnq e vqhhuaejqw b yewmhbgnq vqhhuaejqw",
//         "eaky yewmhbgnq eaky dwdzl yewmhbgnq yewmhbgnq ntqpnqtmnb qfd ks gvumi",
//         "ecutvv vqhhuaejqw vqhhuaejqw inu vqhhuaejqw vqhhuaejqw uu eodzum zjeyq fxebx",
//         "vqhhuaejqw m vuvannpwa mwip atvjp vqhhuaejqw eaky yewmhbgnq vqhhuaejqw yewmhbgnq"
//     ]
// , [581094748,245764367,905556075,127263030,415068015], 4));
console.log(topStudents(["xrezzxgdvg","bcgx","wcfzmfosr"], ["qyouhus","ukou","eirhfbt","qciw","for"], ["bcgx bcgx eirhfbt kvcrym bcgx cxzs eirhfbt wcfzmfosr v qciw","bcgx xrezzxgdvg bcgx xrezzxgdvg wcfzmfosr chap qyouhus biyt wcfzmfosr qciw","xrezzxgdvg wcfzmfosr ukou qcr clnj xrezzxgdvg gvtkvb qciw hi wcfzmfosr","for for mnxpqrdth bcgx bcgx qciw wcfzmfosr lspvgjvk wcfzmfosr eirhfbt","loxyg bcgx jwdesdu xrezzxgdvg wcfzmfosr rrych qyouhus wcfzmfosr klcwo xrezzxgdvg","rvbd wcfzmfosr lj xrezzxgdvg xuwguhgyyy fuz eirhfbt ukou h bcgx","bcgx wpmxyvbhc for qciw wcfzmfosr wjdm qyouhus qciw for xrezzxgdvg","bcgx sj xrezzxgdvg yjoklk bcgx hpc xrezzxgdvg lqfrvk xrezzxgdvg wcfzmfosr","qc wcfzmfosr jkjpgjalc tm v wcfzmfosr orgsqjzwa wcfzmfosr hh bfnxcx"], [686276715,934288178,625397331,519945877,864052244,971253305,512505036,865635090,281613863], 9));