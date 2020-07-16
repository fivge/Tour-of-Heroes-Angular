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

##### a) onMicrotaskEmpty

##### b) ApplicationRef

<https://github.com/angular/angular/blob/master/packages/core/src/application_ref.ts>

<https://github.com/angular/angular/blob/5666d116336e3e0d5426c5d8f6a91c178d797523/packages/core/src/application_ref.ts>

```
onMicrotaskEmpty

_loadComponent
```

变更检测 => 脏值检查

`_loadComponent()` 执行 tick()

`onMicrotaskEmpty` 构造函数`contract()`中第一次加载时，执行变更检测

this.applicationRef.tick()

- 首次加载
- 异步事件

> Q: 5666d116336e3e0d5426c5d8f6a91c178d797523 中关闭 zone，初始化时仍渲染默认的 counter 的值 `0`

<https://github.com/angular/angular/blob/5666d116336e3e0d5426c5d8f6a91c178d797523/packages/core/src/application_ref.ts#L698>

<https://stackblitz.com/edit/ng-tw-counter-without-zone>

> 但在本项目中不出现

<https://github.com/angular/angular/blob/737506e79cbda87d8545a663bdd618a884c2e60e/packages/core/src/application_ref.ts#L764>

##### c) this.applicationRef.tick()

<https://github.com/angular/angular/blob/5666d116336e3e0d5426c5d8f6a91c178d797523/packages/core/src/application_ref.ts#L651>

<https://github.com/angular/angular/blob/737506e79cbda87d8545a663bdd618a884c2e60e/packages/core/src/application_ref.ts#L719>

```ts
  tick(): void {
    if (this._runningTick) {
      throw new Error('ApplicationRef.tick is called recursively');
    }

    try {
      this._runningTick = true;
      for (let view of this._views) {
        view.detectChanges();
      }
      if (this._enforceNoNewChanges) {
        for (let view of this._views) {
          view.checkNoChanges();
        }
      }
    } catch (e) {
      // Attention: Don't rethrow as it could cancel subscriptions to Observables!
      this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(e));
    } finally {
      this._runningTick = false;
    }
  }
```

```ts
for (let view of this._views) {
  view.detectChanges();
}
```

view => ChangeDetectionRef => ViewRef

<=>

this.cdr.detectChanges() 对组件树进行手动变更

##### c) this.cdr.detectChanges()

### component | derective
