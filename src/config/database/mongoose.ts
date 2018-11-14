
import { ENVIRONMENT as ENV, setEnv } from '../secrets';
import { Mongoose } from 'mongoose';
import { todoSchema } from './schema.model';

const env = setEnv(process.env.NODE_ENV) || 'development';
const dbconfig = `${ENV.baseDb}${ENV.host}/${ENV.name}`;

export class MongoClass {
    private mongo = new Mongoose();
    private schema = todoSchema;

    constructor() {
        console.log(dbconfig);
        console.log(env);
        this.initModel();
    }

    public connectDB = async () => {
        try {
            await this.mongo.connect(dbconfig, {
                useNewUrlParser: true,
            })
            console.log('Connected Mongo!')
        } catch (e) {
            console.log('Error! ', e);
        }
    }

    protected initModel = async () => {
        const schema = todoSchema;
        await this.connectDB();
        await this.mongo.model('Todo', schema);
    }

}
