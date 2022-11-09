/**
 *  Generator + yield 遍历 DOM 树
 *  之前遍历树 常用的方式是递归
 */

function* traverse(elemList: Element[]): any {
    for (let elem of elemList) {
        yield elem

        const children = Array.from(elem.children)
        if (children.length) {
            yield* traverse(children)
        }
    }
}

const container = document.getElementById('container')
if (container) {
    for (let node of traverse([container])) {
        console.log(node)
    }
}