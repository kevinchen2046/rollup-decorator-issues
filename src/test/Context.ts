import { exec, Func, Instance, Setting } from "./Decorators";

class MySetting{
    constructor(){
        console.log(111);
    }
}

@Setting(MySetting)
export class Context {
    constructor() {
        exec();
    }
    @Func(123)
    aaa(){
        console.log("aaa");
    }
}

@Instance()
@Setting(MySetting)
export class Context1 {
    constructor() {
        console.log("context1")
    }
}