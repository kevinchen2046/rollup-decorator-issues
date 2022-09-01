export function getQualifiedClassName(value) {
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
export function Setting(clazz) {
    return function (target) {
        // console.log(clazz);
        __setings.push(target);
    };
}
export function Instance() {
    return function (target) {
        new target();
    };
}
export function Func(...args) {
    return function (prototype, methodName, methodSetting) {
        console.log(...args);
        console.log(getQualifiedClassName(prototype));
        console.log(prototype[methodName]);
        console.log(methodSetting);
        prototype[methodName]();
    };
}
export function exec() {
    console.log(__setings);
}
