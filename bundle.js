'use strict';

function getQualifiedClassName(value) {
    let type = typeof value;
    if (!value || (type != "object" && !value.prototype))
        return type;
    let prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
    if (prototype.hasOwnProperty("__class__"))
        return prototype["__class__"];
    let constructorString = (value.constructor ? value.constructor : prototype.constructor).toString().trim();
    let className = constructorString.match(/class(.*?){/)[1].trim().split(" ")[0];
    Object.defineProperty(prototype, "__class__", {
        value: className,
        enumerable: false,
        writable: true
    });
    return className;
}
const __setings = [];
function Setting(clazz) {
    return function (target) {
        // console.log(clazz);
        __setings.push(target);
    };
}
function Instance() {
    return function (target) {
        new target();
    };
}
function Func(...args) {
    return function (prototype, methodName, methodSetting) {
        console.log(...args);
        console.log(getQualifiedClassName(prototype));
        console.log(prototype[methodName]);
        console.log(methodSetting);
        prototype[methodName]();
    };
}
function exec() {
    console.log(__setings);
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
    Setting()
], Context);
let Context1 = class Context1 {
    constructor() {
        console.log("context1");
    }
};
Context1 = __decorate([
    Instance(),
    Setting()
], Context1);

class Main {
    constructor() {
        new Context();
    }
}

module.exports = Main;
