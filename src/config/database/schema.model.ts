import { Schema } from 'mongoose';

export class TodoSchema extends Schema {
    private todoSchema: Schema = new Schema({
        name: {
            type: String,
        },
        descr: {
            type: String,
            required: 'Add description',
        },
        date: {
            type: Date,
            default: Date.now(),
        },
    });

}
