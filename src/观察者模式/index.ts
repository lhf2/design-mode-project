/**
 * 观察者模式
 */

// 主题
class Subject {
    private state: number = 0
    private observers: Observer[] = []

    getState(): number {
        return this.state
    }

    setState(newState: number) {
        this.state = newState
        this.notify()
    }

    // 添加观察者
    attach(observer: Observer) {
        this.observers.push(observer)
    }

    // 通知观察者更新
    private notify() {
        if (this.observers.length === 0) return
        // 循环所有观察者 通知其更新
        this.observers.forEach(observer => {
            observer.update(this.state)
        })
    }

}

// 观察者
class Observer {
    name: string
    constructor(name: string) {
        this.name = name
    }
    // 更新
    update(state: number) {
        console.log(`${this.name} updated, state is ${state}`)
    }
}


// test
const sub = new Subject()
const observer1 = new Observer('A')
sub.attach(observer1)
const observer2 = new Observer('B')
sub.attach(observer2)

sub.setState(1)