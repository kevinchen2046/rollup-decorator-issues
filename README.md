# rollup-decorator-issues
 The modules that contain decorators but are not imported is ignored . because it does not pass static analysis?
 Is there a way to solve this problem or try to fix it.

typescript:
```typescript
import { Instance} from "./Decorators";

@Instance()
export class Test {
    constructor(){
        console.log("test");
    }
}
```
compiled...
javascript:
```js
import { Instance } from "./Decorators";
let Test = class Test {
    constructor() {
        console.log("test");
    }
};
Test = __decorate([
    Instance(),
    __metadata("design:paramtypes", [])
], Test);
export { Test };
```
Because this module is not imported by other modules, the bundle is ignored.this limits the design pattern based on typescript decorators.

The modules that contain decorators but are not imported are also summarized in the bundle.

-_**`module`**(contain decorator & not imported) ---> `bundle.js`_-