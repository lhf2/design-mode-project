/**
 *  装饰器模式
 */

class Circle {
    draw() {
        console.log('画一个圆形');
    }
}

class Decorator {
    private circle: Circle
    constructor(circle: Circle) {
        this.circle = circle
    }

    draw() {
        // 装饰
        this.setBorder()
        // 原有功能
        this.circle.draw()
    }
    private setBorder() {
        console.log('设置边框的颜色')
    }
}

const circle = new Circle()
const decorator = new Decorator(circle)
decorator.draw() // 设置边框的颜色 // 画一个圆形
