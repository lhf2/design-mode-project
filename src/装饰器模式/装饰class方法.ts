/**
 * readOnly 装饰器
 * @param target 实例
 * @param key key
 * @param descriptor 属性描述符
 */

function readOnly(target: any, key: string, descriptor: PropertyDescriptor) {
    // console.log(target);
    // console.log(key);
    // console.log(descriptor);
    descriptor.writable = false
}

function configurable(val: boolean){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        descriptor.writable = val
    }
}

class Foo {
    private name = '张三'
    private age = 20

    @readOnly
    getName() {
        return this.name
    }

    @configurable(false)
    getAge() {
        return this.age
    }
}

const f = new Foo()
// f.getName = () => { return '修改了' } // 报错

// @ts-ignore
console.log( Object.getOwnPropertyDescriptor(f.__proto__, 'getAge') )