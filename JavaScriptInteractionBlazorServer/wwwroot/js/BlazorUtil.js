import { Calculator } from "./Calculator.js";
import { Unpredictable } from "./Unpredictable.js";

class BlazorUtil
{
    calculator = new Calculator();
    unpredictable = new Unpredictable();

    async import(path, moduleName)
    {
        let module = await import(path);
        let instance = new module[moduleName];
        let instanceName = `${moduleName[0].toLowerCase()}${moduleName.slice(1)}`;
        this[instanceName] = instance;
    }
}

window.BlazorUtil = new BlazorUtil();