// 你有 k 个服务器，编号为 0 到 k-1 ，它们可以同时处理多个请求组。每个服务器有无穷的计算能力但是 不能同时处理超过一个请求 。请求分配到服务器的规则如下：

// 第 i （序号从 0 开始）个请求到达。
// 如果所有服务器都已被占据，那么该请求被舍弃（完全不处理）。
// 如果第 (i % k) 个服务器空闲，那么对应服务器会处理该请求。
// 否则，将请求安排给下一个空闲的服务器（服务器构成一个环，必要的话可能从第 0 个服务器开始继续找下一个空闲的服务器）。比方说，如果第 i 个服务器在忙，那么会查看第 (i+1) 个服务器，第 (i+2) 个服务器等等。
// 给你一个 严格递增 的正整数数组 arrival ，表示第 i 个任务的到达时间，和另一个数组 load ，其中 load[i] 表示第 i 个请求的工作量（也就是服务器完成它所需要的时间）。你的任务是找到 最繁忙的服务器 。最繁忙定义为一个服务器处理的请求数是所有服务器里最多的。

// 请你返回包含所有 最繁忙服务器 序号的列表，你可以以任意顺序返回这个列表。
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers1 = function(k, arrival, load) {
    const serverLoad = Array(k).fill(0); // 记录每个服务器的负载
    const serverWork = Array(k).fill(0); // 记录每个服务器工作状态

    let max = 0;
    for (let i = 0; i < arrival.length; i++) {
        const time = arrival[i];
        const work = load[i];

        let count = 1;
        let server = i % k;
        // 繁忙
        while(serverWork[server] > time && count <= k) {
            server = (server + 1) % k;
            count += 1;
        }

        if (serverWork[server] <= time) {
            serverWork[server] = time + work;
            serverLoad[server] += 1;
            max = Math.max(serverLoad[server], max);
        }
    }

    const result = [];
    for (let i = 0; i < k; i++) {
        if (serverLoad[i] === max) {
            result.push(i);
        }
    }

    return result;
};

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    get size() {
        return this.queue.length;
    }

    get min() {
        return this.queue[0];
    }

    upJust(index) {
        const nums = this.queue;
        let childIndex = index;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        while(parentIndex >= 0 && nums[parentIndex].value > nums[childIndex].value) {
            const temp = nums[childIndex];
            nums[childIndex] = nums[parentIndex];
            nums[parentIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    downJust(index) {
        const nums = this.queue;
        let parentIndex = index;
        let childIndex = parentIndex * 2 + 1;
        while(childIndex < this.queue.length) {
            if (childIndex + 1 < this.queue.length && nums[childIndex + 1].value < nums[childIndex].value) {
                childIndex = childIndex + 1;
            }
            if (nums[parentIndex].value <= nums[childIndex].value) {
                break;
            }
            const temp = nums[parentIndex];
            nums[parentIndex] = nums[childIndex];
            nums[childIndex] = temp;
            parentIndex = childIndex;
            childIndex = parentIndex * 2 + 1;
        }
    }

    insert(value, index) {
        this.queue.push({ value, index });

        this.upJust(this.queue.length - 1);
    }

    delete() {
        const top = this.queue[0];
        this.queue[0] = this.queue[this.queue.length - 1];
        this.queue.length = this.queue.length - 1;

        this.downJust(0);
        return top;
    }
}

var busiestServers = function(k, arrival, load) {
    const available = new PriorityQueue(); // 记录空闲服务器
    const busy = new PriorityQueue(); // 记录工作服务器

    const requests = Array(k).fill(0); // 记录每个服务器的请求次数

    let max = 0;
    for (let i = 0; i < k; i++) {
        available.insert(i);
    }

    for (let i = 0; i < arrival.length; i++) {
        const time = arrival[i];
        const work = load[i];
        while(busy.size > 0 && busy.min.value <= time) {
            const top = busy.delete();
            // TODO
            /**
             * 模拟情况：
             * 1. i < k 的时候，available top 一定是 i，因为 第i台服务器是空闲的
             * 这种情况下，出现释放的时候，释放的机器 插入的 index一定要在i后面
             * 2. i >= k 的时候，available top 一定是 i % k，或者是大于 i % k 最接近的服务器，或者 最小的值
             * 
             * 针对第一种情况，释放的时候 index = i + k - i + id(当前释放的index) (i < k && id < k)
             * 
             * 
             * 针对第二种情况，释放的时候
             * 
             * 当前 id % k >= i % k，需要放在 index = i + id % k (id % k >= i % k) 即可
             * 
             * 当前 id % k < i % k，需要放到 i + k - i % k 之后，i + k - i % k 是所有 i % k ～ (k - 1) % k，
             * 小于的直接放在这个后面即可， index = i + k - i % k + id % k (id % k < i % k)
             * 
             * 合并起来就是  index = i + (k - i % k + id % k) % k = i + ((id - i) % k + k) % k
             * 
             */
            available.insert(i + (k - i % k + top.index % k) % k);
        }

        if (available.size <= 0) {
            continue;
        }
        const index = available.delete();
        const server = index.value % k;
        busy.insert(time + work, server);
        requests[server] += 1;
        max = Math.max(max, requests[server]);
    }
    const result = [];
    for (let i = 0; i < k; i++) {
        if (requests[i] === max) {
            result.push(i);
        }
    }
    return result;
}
console.log(busiestServers(3, [1,2,3,4], [1,2,1,2]))
// console.log(busiestServers(4, [1,3,4,5,10,12], [11,9,3,1,9,12]));
// console.log(busiestServers(3, [1,2,3,4,5], [5,2,3,3,3] ));
// console.log(busiestServers(3, [1,2,3,4,8,9,10], [5,2,10,3,1,2,2]))