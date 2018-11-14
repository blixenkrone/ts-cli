import winston from 'winston';

const tsFormat = () => new Date().toLocaleTimeString();

export let logger: winston.Logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new (winston.transports.Console)({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        }),
        new (winston.transports.File)({
            filename: 'debug.log', level: 'debug',
        }),
    ],
});
