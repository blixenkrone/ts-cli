import { Schema } from 'mongoose';

export const todoSchema: Schema = new Schema({
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
