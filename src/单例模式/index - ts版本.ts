/**
 * 单例模式 —— 利用 class 的 static 特性
 */

class SingleTon {
    // private 无法在外面实例化 new
    private constructor() { }

    // private 无法在外面获取
    private static instance: SingleTon | null

    // 获取单例
    static getInstance(): SingleTon {
        if (SingleTon.instance === null) {
            return new SingleTon()
        }
        return SingleTon.instance // 单例模式
    }
}


// test
// 正确获取单例对象的方式
const s1 = SingleTon.getInstance()
const s2 = SingleTon.getInstance()
console.log(s1 === s2) // true

 // SingleTon.instance // 报错
 // const s2 = new SingleTon() // 报错

