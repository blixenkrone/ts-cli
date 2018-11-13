#!/usr/bin/env node

import { ShellClass } from './utils/shell';
import { CommanderClass } from './utils/commander';

const shell = new ShellClass();
const cmd = new CommanderClass();

shell.initShell();
cmd.initCmd();
