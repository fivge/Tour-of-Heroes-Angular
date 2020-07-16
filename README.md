## angular in depth

### change detection

#### how

old vs new

#### when

Brower Async API > zone.js

- Events 所有浏览器事件
- Timers setTimeout setInterval
- XHR Ajax

#### source code

ApplicationRef

<https://github.com/angular/angular/blob/master/packages/core/src/application_ref.ts>

<https://github.com/angular/angular/blob/5666d116336e3e0d5426c5d8f6a91c178d797523/packages/core/src/application_ref.ts>

```
onMicrotaskEmpty

_loadComponent
```

`_loadComponent()` 执行 tick()

`onMicrotaskEmpty` 构造函数`contract()`中第一次加载时，执行变更检测

this.applicationRef.tick()

### component | derective

###
