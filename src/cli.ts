#!/usr/bin/env node
import { CommanderClass, ShellClass, logger } from './utils';

class CLI {

    private shell = new ShellClass();

    constructor() {
        this.shell.initShell();
    }
}

export = new CLI();
