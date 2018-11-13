#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell_1 = require("./utils/shell");
const commander_1 = require("./utils/commander");
const shell = new shell_1.ShellClass();
const cmd = new commander_1.CommanderClass();
shell.initShell();
cmd.initCmd();
