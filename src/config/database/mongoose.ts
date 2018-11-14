
import { ENVIRONMENT as ENV, setEnv } from '../secrets';
import mongoose from 'mongoose';
import { TodoSchema } from './schema.interface';

const env = setEnv(process.env.NODE_ENV) || 'development';
const dbconfig = `${ENV.baseDb}${ENV.host}/${ENV.name}`;

export class MongoClass {
    constructor() {
        console.log(dbconfig);
        console.log(env);
    }

    public connect = async () => {
        try {
            await mongoose.connect(dbconfig, {
                useNewUrlParser: true,
            })
            console.log('Connected Mongo!')
        } catch (e) {
            console.log('Error! ', e);
        }
    }

}
