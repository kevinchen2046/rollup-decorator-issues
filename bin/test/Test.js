import { Instance } from "./Decorators";
let Test = class Test {
    constructor() {
        console.log("test");
    }
};
Test = __decorate([
    Instance()
], Test);
export { Test };
