/**
 * 工厂模式 —— 简单模式
 */

class Product {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        console.log('Product fn1');
    }
    fn2() {
        console.log('Product fn2');
    }
}

// 工厂
class Creator {
    create(name: string): Product {
        return new Product(name)
    }
}

// 使用
const creator = new Creator()
const p1 = creator.create('p1')
const p2 = creator.create('p2')
const p3 = creator.create('p3')
console.log('p1', p1);
console.log('p2', p2);
console.log('p3', p3);


