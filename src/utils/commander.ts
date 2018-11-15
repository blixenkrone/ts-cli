import cmd from 'commander';

export class CommanderClass {
    constructor() { }

    public initCmd = () => {
        cmd
            .option('-r, --run', 'Run program!')
            .command('run', 'Run this cmd')
            .parse(process.argv);
    }
}
