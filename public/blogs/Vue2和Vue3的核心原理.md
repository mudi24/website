---
title: Vue2和Vue3的核心原理
date: 2025-01-10
readTime: 9 min read
category: 前端
---

# Vue2 核心原理深度解析

## 1. 响应式系统（Reactivity System）
**实现机制**：
- 基于 Object.defineProperty 的 getter/setter
- 依赖收集通过 Dep 类和 Watcher 类实现
- 数组方法重写（push/pop/shift/unshift 等）

**详细工作流程**：
```javascript
class Dep {
  constructor() {
    this.subs = []
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}

function defineReactive(obj, key) {
  const dep = new Dep()
  let value = obj[key]
  
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set(newVal) {
      if (newVal === value) return
      value = newVal
      dep.notify()
    }
  })
}

class Watcher {
  constructor(vm, expOrFn) {
    this.vm = vm
    this.getter = parsePath(expOrFn)
    this.value = this.get()
  }
  
  get() {
    Dep.target = this
    const value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }
  
  update() {
    this.run()
  }
  
  run() {
    const value = this.get()
    if (value !== this.value) {
      const oldValue = this.value
      this.value = value
      this.cb.call(this.vm, value, oldValue)
    }
  }
}
```

**关键限制**：
- 无法检测对象属性的添加/删除（需用 Vue.set/Vue.delete）
- 数组索引直接修改不触发更新
- 大数据量时的性能瓶颈

## 2. 虚拟DOM与Diff算法
**核心优化策略**：
1. 同级比较（不跨级）
2. Key优化（最小化移动操作）
3. 双端比较算法：
   - 新旧节点的首尾指针比较
   - 四种比较场景：旧首 vs 新首，旧尾 vs 新尾，旧首 vs 新尾，旧尾 vs 新首

**Diff 复杂度分析**：
- 最优 O(n)
- 最坏 O(n^2)
- 实际场景中通过 key 优化接近 O(n)

## 3. 模板编译
**编译过程**：
1. 解析器（Parser）：将模板转换为 AST
2. 优化器（Optimizer）：标记静态节点
3. 代码生成器（Generator）：生成渲染函数

```javascript
// 生成的渲染函数示例
function render() {
  with(this){
    return _c('div', {attrs:{"id":"app"}}, [
      _c('p', [_v(_s(message))]),
      _c('button', {on:{"click":changeMessage}},[_v("Change")])
    ])
  }
}
```

# Vue3 核心原理深度解析

## 1. 响应式系统重构
**Proxy 实现原理**：
```javascript
function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      if (result && oldValue !== value) {
        trigger(target, key)
      }
      return result
    }
  }
  return new Proxy(target, handler)
}

const targetMap = new WeakMap()

function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(effect => effect())
}
```

**优势对比**：
- 支持 Map/Set/WeakMap 等新数据类型
- 自动跟踪新增/删除属性
- 更细粒度的依赖收集
- 性能提升约 200%（基于 ES6 Proxy）

## 2. 编译时优化
### 2.1 静态提升（Static Hoisting）
**编译前模板**：
```html
<div>
  <div>{{ msg }}</div>
  <div>static text</div>
</div>
```

**编译后代码**：
```javascript
const _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "static text")

function render() {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("div", null, _toDisplayString(_ctx.msg), 1 /* TEXT */),
    _hoisted_1
  ]))
}
```

### 2.2 补丁标志（Patch Flags）
```javascript
export const enum PatchFlags {
  TEXT = 1,            // 动态文本节点
  CLASS = 1 << 1,       // 动态 class
  STYLE = 1 << 2,       // 动态 style
  PROPS = 1 << 3,       // 动态 props（不含 class/style）
  FULL_PROPS = 1 << 4,  // 包含动态 key 的 props
  HYDRATE_EVENTS = 1 << 5,
  STABLE_FRAGMENT = 1 << 6,
  KEYED_FRAGMENT = 1 << 7,
  UNKEYED_FRAGMENT = 1 << 8,
  NEED_PATCH = 1 << 9,
  DYNAMIC_SLOTS = 1 << 10,
  DEV_ROOT_FRAGMENT = 1 << 11,
  HOISTED = -1,
  BAIL = -2
}
```

## 3. Composition API 设计哲学
**核心实现原理**：
```typescript
let activeEffect: Function | null = null

class ReactiveEffect<T = any> {
  constructor(public fn: () => T) {}

  run() {
    activeEffect = this
    return this.fn()
  }
}

function effect<T = any>(fn: () => T) {
  const _effect = new ReactiveEffect(fn)
  _effect.run()
  return _effect.run.bind(_effect)
}

// 使用示例
const count = ref(0)

effect(() => {
  console.log(`count is ${count.value}`)
})
```

**设计优势**：
1. 更好的逻辑复用（自定义组合函数）
2. 更灵活的代码组织
3. 更好的 TypeScript 支持
4. 运行时更小的开销

## 4. 性能优化策略对比
| 优化点          | Vue2 实现                      | Vue3 改进                          | 性能提升 |
|---------------|------------------------------|-----------------------------------|--------|
| 响应式系统       | Object.defineProperty        | Proxy + WeakMap                  | 200%+  |
| 虚拟DOM        | 全量 Diff                     | Block Tree + 补丁标志              | 300%+  |
| 模板编译        | 简单静态节点优化                | 静态提升 + 预字符串化               | 40%+   |
| 组件实例化      | Options API                  | 基于Proxy的轻量实例                 | 50%+   |
| 打包体积        | 全量引入                      | Tree-shaking 友好                 | 41%+   |

## 5. 源码架构演进
Vue3 的主要模块划分：
```
├── compiler-core       // 平台无关的编译器核心
├── compiler-dom        // DOM 平台的编译器
├── reactivity          // 响应式系统
├── runtime-core        // 与平台无关的运行时核心
├── runtime-dom         // DOM 平台的运行时
├── server-renderer     // 服务端渲染
└── shared              // 公共工具方法
```

## 6. 底层原理进阶
### 6.1 响应式系统调度
```typescript
const queue: (Function | null)[] = []
let isFlushing = false

function queueJob(job: () => void) {
  if (!queue.includes(job)) {
    queue.push(job)
    if (!isFlushing) {
      isFlushing = true
      Promise.resolve().then(flushJobs)
    }
  }
}

function flushJobs() {
  try {
    for (let i = 0; i < queue.length; i++) {
      const job = queue[i]
      job && job()
    }
  } finally {
    isFlushing = false
    queue.length = 0
  }
}
```

### 6.2 Block Tree 算法
```javascript
// Block 节点结构
interface Block {
  type: symbol
  dynamicChildren: VNode[] | null
  patchFlag: number
  children: VNode[]
}
```

## 总结与最佳实践
1. **性能敏感场景**：优先使用 Vue3，特别是大型复杂应用
2. **状态管理**：复杂逻辑优先使用 Composition API + Pinia
3. **类型系统**：Vue3 + TypeScript 组合能获得最佳开发体验
4. **迁移策略**：
   - 渐进式迁移（使用 @vue/compat）
   - 优先重构高频使用的组件
   - 分阶段替换 Vue2 特有特性（filters → 计算方法）