
import { ENVIRONMENT as ENV, setEnv } from '../secrets';
import { Mongoose } from 'mongoose';
import { todoSchema } from './schema.model';

const env = setEnv(process.env.NODE_ENV) || 'development';
const dbconfig = `${ENV.baseDb}${ENV.host}/${ENV.name}`;

export class MongoClass {
    private mongo = new Mongoose();
    private schema = todoSchema;
    private model: any;

    constructor() {
        console.log(dbconfig);
        console.log(env);
        this.connectDB();
        this.model = this.mongo.model('Todo', this.schema);
    }

    public connectDB = async () => {
        try {
            await this.mongo.connect(dbconfig, {
                useNewUrlParser: true,
            })
            console.log('Connected to MongoDB!')
        } catch (e) {
            console.log('Error!: ', e);
        }
    }

    public createModel = async () => {
        const todo = new this.model({
            name: 'ToDo',
            descr: 'A new ToDo',
            date: Date.now(),
        });
        const result = await todo.save();
        console.log(result)
    }
}
