/**
 * 单例模式 —— js版本（闭包）
 */

//@ts-nocheck
// 生成一个获取实例的方法
function genGetInstance() {
    let instance // 闭包
    class Singleton { }
    return () => {
        if (instance === null) {
            return new Singleton()
        }
        return instance
    }
}

// test
const getInstance = genGetInstance()
const s1 = getInstance()
const s2 = getInstance()
console.log(s1 === s2) // true


// ------------------- 分割线 -------------------
/**
 * 单例模式 —— js版本（使用 es6 模块化）
 */

// getInstance.js 文件 - 开始
let instance // 闭包
class Singleton { }
export default () => {
    if (instance === null) {
        return new Singleton()
    }
    return instance
}
// getInstance.js 文件 - 结束