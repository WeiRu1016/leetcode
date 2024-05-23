// 一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。

// 给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：

// 每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
// 请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers1 = function(answerKey, k) {
    let max = 1;
    answerKey = answerKey.split('');
    const bfs = (index, count) => {
        max = Math.max(max, count);
        if (index >= answerKey.length) {
            return;
        }

        const currentKey = answerKey[index];
        const changedKey = answerKey[index] === 'T' ? 'F' : 'T';

        if (k > 0) {
            // 变化
            answerKey[index] = changedKey;
            k -= 1;
            if (index >= 1) {
                bfs(index + 1, answerKey[index - 1] === answerKey[index] ? count + 1 : 1);
            } else {
                bfs(index + 1, 1);
            }
            answerKey[index] = currentKey;
            k += 1;
        }
        // 不变化
        if (index >= 1) {
            bfs(index + 1, answerKey[index - 1] === answerKey[index] ? count + 1 : 1)
        } else {
            bfs(index + 1, 1);
        }
    }
    bfs(0, 0);
    return max;
};
// 滑动窗口
var maxConsecutiveAnswers = function(answerKey, k) {
    const maxConsecutiveAnswerByKey = (chart) => {
        let max = 0;
        for (let left = 0, right = 0, sum = 0; right < answerKey.length; right++) {
            if (answerKey[right] !== chart) {
                sum += 1;
            }
            while(sum > k) {
                if (answerKey[left] !== chart) {
                    sum -= 1;
                }
                left++;
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
    return Math.max(maxConsecutiveAnswerByKey('T'), maxConsecutiveAnswerByKey('F'));
}

console.log(maxConsecutiveAnswers('TTFF', 2) === 4);
console.log(maxConsecutiveAnswers("TTFTTTTTFT", 1) === 8);
console.log(maxConsecutiveAnswers("FFFTTFTTFT", 3) === 8); // 8
console.log(maxConsecutiveAnswers("FTFFTFTFTTFTTFTTFFTTFFTTTTTFTTTFTFFTTFFFFFTTTTFTTTTTTTTTFTTFFTTFTFFTTTFFFFFTTTFFTTTTFTFTFFTTFTTTTTTF", 32))
