/**
 * 发布订阅模式 - 自定义事件
 */

// import mitt from "mitt";

// // 单例
// const emitter = mitt()

// // 监听
// emitter.on('change', () => {
//     console.log('change1');
// })
// emitter.on('change', () => {
//     console.log('change2');
// })

// // 触发
// // mitt 没有 once 事件
// emitter.emit('change')
// emitter.off('change')
// emitter.emit('change')

// ------------------- 分割线 -------------------
import eventEmitter from 'event-emitter'

// 单例模式
const emitter = eventEmitter()

// 监听
emitter.on('change', (value: string, name: string) => {
    console.log('change', value, name);
})
emitter.on('change', () => {
    console.log('change2')
})
emitter.once('change', () => {
    console.log('change3')
})

// 触发
emitter.emit('change', 'aaa', '张三')
emitter.emit('change', 'bbb')
emitter.emit('change', 'ccc')