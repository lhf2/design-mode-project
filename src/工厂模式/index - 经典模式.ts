/**
 * 工厂模式 —— 经典模式
 */

interface IProduct {
    name: string
    fn1: () => void
    fn2: () => void
}

// 类 - 实现接口
class Product1 implements IProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        console.log('Product1 fn1')
    }
    fn2() {
        console.log('Product1 fn2')
    }
}

class Product2 implements IProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        console.log('Product2 fn1')
    }
    fn2() {
        console.log('Product2 fn2')
    }
}

// 工厂
class CreatorProduct {
    // 依赖倒置原则 不依赖具体的某个类 而依赖一个公共的
    create(type: string, name: string): IProduct {
        // new 时候的逻辑
        if (type === 'p1') {
            return new Product1(name)
        }

        if (type === 'p2') {
            return new Product2(name)
        }

        throw new Error('Invalid type')
    }
}


// 使用
const creatorProduct = new CreatorProduct()
const pName1 = creatorProduct.create('p1', 'name1')
pName1.fn1()
const pName2 = creatorProduct.create('p2', 'name2')
pName2.fn2()
console.log(pName1);
console.log(pName2);


