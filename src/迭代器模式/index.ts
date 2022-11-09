/**
 * 迭代器模式
 */

// test
// const arr = [1, 2, 3]
// const iterator = arr[Symbol.iterator]()
// console.log(iterator.next()); // {value: 1, done: false}
// console.log(iterator.next()); // {value: 2, done: false}
// console.log(iterator.next()); // {value: 3, done: false}
// console.log(iterator.next()); // {value: undefined, done: true}

class DataIterator {
    private data: number[]
    private index = 0
    constructor(container: DataContainer) {
        this.data = container.data
    }

    next(): Number | null {
        if (this.hasNext()) {
            return this.data[this.index++] // 返回下一个值 & 累加 index
        }
        return null
    }

    hasNext(): boolean {
        if (this.index >= this.data.length) return false
        return true
    }
}


class DataContainer {
    data = [10, 20, 30, 40, 50]
    // 获取迭代器
    getIterator() {
        return new DataIterator(this)
    }
}

// test
const container = new DataContainer()
const iterator = container.getIterator() // 获取迭代器
while(iterator.hasNext()) {
    const num = iterator.next()
    console.log(num)
}
