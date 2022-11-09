/**
 * AOP 面向切面编程
 */

// 不太好的方式
// class Foo {
//     fn1() {
//         log() // 记录日志
//         console.log('业务功能 - 点赞')
//     }

//     fn2() {
//         log()
//         console.log('业务功能 - 回复')
//     }
// }

// function log () {
//     console.log('记录日志')
// }


function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const oldValue = descriptor.value // 值，函数

    // 重新定义 fn1 方法
    descriptor.value = function () {
        // 装饰
        console.log('记录日志')
        // 执行旧函数
        return oldValue.apply(this, arguments)
    }
}

class Foo {
    @log
    fn1() {
        console.log('业务功能 - 点赞')
    }
}

const f1 = new Foo()
f1.fn1()
