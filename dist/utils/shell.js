"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
class ShellClass {
    constructor() {
        this.initShell = () => {
            shelljs_1.default.echo('Hello Pasha!');
        };
    }
}
exports.ShellClass = ShellClass;
