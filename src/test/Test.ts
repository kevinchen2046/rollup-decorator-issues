import { Instance, Setting } from "./Decorators";

@Instance()
export class Test {
    constructor(){
        console.log("test");
    }
}