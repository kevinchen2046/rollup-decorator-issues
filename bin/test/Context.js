import { exec, Func, Instance, Setting } from "./Decorators";
class MySetting {
    constructor() {
        console.log(111);
    }
}
let Context = class Context {
    constructor() {
        exec();
    }
    aaa() {
        console.log("aaa");
    }
};
__decorate([
    Func(123)
], Context.prototype, "aaa", null);
Context = __decorate([
    Setting(MySetting)
], Context);
export { Context };
let Context1 = class Context1 {
    constructor() {
        console.log("context1");
    }
};
Context1 = __decorate([
    Instance(),
    Setting(MySetting)
], Context1);
export { Context1 };
