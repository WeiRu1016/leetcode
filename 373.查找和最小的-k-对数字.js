/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

const sum = (nums) => {
    return nums[0] + nums[1];
}

var kSmallestPairs1 = function(nums1, nums2, k) {
    const result = [];
    const heap = [];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const index = heap.push([nums1[i], nums2[j]]);
            let currentPosition = index - 1;
            let parentPosition = (currentPosition - 1) >> 1;
            while (currentPosition > 0 && sum(heap[currentPosition]) < sum(heap[parentPosition])) {
                const temp = heap[currentPosition]
                heap[currentPosition] = heap[parentPosition]
                heap[parentPosition] = temp
                currentPosition = parentPosition
                parentPosition = (currentPosition - 1) >> 1
            }
        }
    }

    for (let i = 0; i < k && heap.length > 0; i++) {
        const top = heap[0];
        result.push(top);

        if (heap.length <= 1) {
            heap.pop();
        } else {
            heap[0] = heap.pop();
        }
        let root = 0;
        let left = root * 2 + 1;
        let right = root * 2 + 2;
        while(heap[left] || heap[right]) {
            let minChildIndex = right;
            if (!heap[right] || sum(heap[left]) < sum(heap[right])) {
                minChildIndex = left;
            }
            if (sum(heap[minChildIndex]) >= sum(heap[root])) {
                break;
            }
            const temp = heap[root];
            heap[root] = heap[minChildIndex];
            heap[minChildIndex] = temp;
            root = minChildIndex;
            left = root * 2 + 1;
            right = root * 2 + 2;
        }
    }

    return result;
};

class Heap {
    constructor(jude) {
        this.queue = [];
        this.jude = jude;
    }
    insert(value) {
        this.queue.push(value);

        let currentPosition = this.queue.length - 1;
        let parentPosition = Math.floor((currentPosition - 1) / 2);

        while(parentPosition >= 0 && this.jude(this.queue[parentPosition]) > this.jude(this.queue[currentPosition])) {
            const temp = this.queue[parentPosition];
            this.queue[parentPosition] = this.queue[currentPosition];
            this.queue[currentPosition] = temp;

            currentPosition = parentPosition;
            parentPosition = Math.floor((currentPosition - 1) / 2);
        }
    }
    delete() {
        const top = this.queue[0];
        this.queue[0] = this.queue[this.queue.length - 1];
        this.queue.length = this.queue.length - 1;

        let currentPosition = 0;
        let childPosition = currentPosition * 2 + 1;
        while(childPosition < this.queue.length) {
            if (childPosition + 1 < this.queue.length && this.jude(this.queue[childPosition + 1]) < this.jude(this.queue[childPosition])) {
                childPosition = childPosition + 1;
            }
            if (this.jude(this.queue[currentPosition]) <= this.jude(this.queue[childPosition])) {
                break;
            }
            const temp = this.queue[childPosition];
            this.queue[childPosition] = this.queue[currentPosition];
            this.queue[currentPosition] = temp;

            currentPosition = childPosition;
            childPosition = currentPosition * 2 + 1;
        }

        return top;
    }
}

var kSmallestPairs2 = function(nums1, nums2, k) {
    const result = [];
    let pos1 = 0;
    let pos2 = 0;
    const jude = (index1, index2) => {
        return nums1[index1] + nums2[index2];
    };
    const heap = new Heap(jude);

    while(pos1 < nums1.length && pos2 < nums2.length && k > 0) {
        result.push([nums1[pos1], nums2[pos2]]);
        k -= 1;

        if (pos1 + 1 === nums1.length && pos2 + 1 === nums2.length) {
            break;
        }

        if (pos1 + 1 < nums1.length && pos2 + 1 < nums2.length) {
            const min = Math.min(nums1[pos1 + 1] + nums2[pos2], nums1[pos1] + nums2[pos2 + 1]);
            while(k > 0 && heap.queue.length > 0 && jude(heap.queue[0]) <= min) {
                const top = heap.delete();
                k--;
                result.push([nums1[top[0]], nums2[top[1]]]);
            }
        }

        if (pos1 + 1 === nums1.length || nums1[pos1 + 1] + nums2[pos2] < nums1[pos1] + nums2[pos2 + 1]) {
            for (let j = pos2 + 1; j < nums2.length; j++) {
                heap.insert([pos1, j]);
            }
            pos1 += 1;
        } else {
            for (let j = pos1 + 1; j < nums1.length; j++) {
                heap.insert([j, pos2]);
            }
            pos2 += 1;
        }
    }

    while(heap.queue.length > 0 && k > 0) {
        const top = heap.delete();
        result.push([nums1[top[0]], nums2[top[1]]]);
        k -= 1;
    }
    
    return result;
}

var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    const heap = new Heap(([index1, index2]) => {
        return nums1[index1] + nums2[index2];
    });
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.insert([i, 0]);
    }

    while(heap.queue.length > 0 && k > 0) {
        const top = heap.delete();
        result.push([nums1[top[0]], nums2[top[1]]]);
        k -= 1;

        if (top[1] + 1 < nums2.length) {
            heap.insert([top[0], top[1] + 1]);
        }
    }
    return result;
}

// console.log(kSmallestPairs([1], [3,5,6,7,8,100], 4));
console.log(kSmallestPairs([1,2,4,5,6], [3,5,7,9], 3));
// console.log(kSmallestPairs([1,1,2], [1,2,3], 10)) // [[1,1],[1,1],[2,1],[1,2],[1,2],[2,2],[1,3],[1,3],[2,3]]
// console.log(kSmallestPairs([1,2,4,5,6], [3,5,7,9], 3));
// console.log(kSmallestPairs([1,1,2], [1,2,3], 10));
// console.log(kSmallestPairs([1,7,11], [2,4,6], 3));
// console.log(kSmallestPairs([1,1,2], [1,2,3], 2));
// @lc code=end

