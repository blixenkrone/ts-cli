#!/usr/bin/env node
import { CommanderClass, ShellClass, logger } from './utils';

export class CLI {

    private shell = new ShellClass();
    private cmd = new CommanderClass();

    constructor() {
        // this.cmd.initCmd();
        // this.shell.initShell();
    }

    private addData = () => {

    }

}

// export = new CLI;
