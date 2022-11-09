/**
 * 自定义迭代器
 */

interface IteratorRes {
    value: number | undefined
    done: boolean
}

class CustomIterator {
    data: number[] = []
    private index: number = 0
    constructor(data: number[]) {
        this.data = data
    }
    next(): IteratorRes {
        let ret
        if (this.index <= this.data.length) {
            ret = {
                value: this.data[this.index],
                done: false
            }
        } else {
            ret = {
                value: undefined,
                done: true
            }
        }
        this.index++
        return ret
    }

    [Symbol.iterator]() {
        return this
    }
}

// test
const iterator = new CustomIterator([10, 20, 30])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())