/**
 *  生成器 —— 生成一个迭代器
 */

// function* genNums(){
//     yield 10
//     yield 20
//     yield 30
// }

// // 迭代器，如 arr[Symbol.Iterator]()
// const numsIterator = genNums() 
// // console.log( numsIterator.next() )
// // console.log( numsIterator.next() )
// // console.log( numsIterator.next() )
// // console.log( numsIterator.next() )

// for (let n of numsIterator) {
//     console.log(n)
// }

// ---------------- 分割线 ----------------
// yield* 语法 + 有序结构，已经实现了 [Symbol.Iterator]
// function* genNums(){
//     yield* [10, 20, 30]

//     // 相当于如下代码
//     // const arr = [10, 20, 30]
//     // for (let i = 0; i < arr.length; i++) {
//     //     yield arr[i]

//     // }
// }
// const numsIterator = genNums() 
// for (let n of numsIterator) {
//     console.log(n)
// }

// ---------------- 分割线 ----------------
/**
 * 使用生成器的方式自定义迭代器
 */
class CustomIterator1 {
    data: number[]
    constructor(data: number[]) {
        this.data = data
    }
    // 注意这里
    *[Symbol.iterator]() {
        yield* this.data
    }
}

const iterator1 = new CustomIterator1([10, 20, 30])
for (let n of iterator1) {
    console.log(n)
}