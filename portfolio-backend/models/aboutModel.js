import {Schema, model, ObjectId} from 'mongoose';

const aboutSchema = new Schema({
    article: [{
        type: ObjectId,
        ref: 'Article'
    }],
});

export default model ('About', aboutSchema)