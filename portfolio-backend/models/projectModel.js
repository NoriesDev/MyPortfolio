import {Schema, model} from 'mongoose';

const projectSchema = new Schema({
    projectTitle: {
        type: String,
        maxlength: 255
    },
    description:{
        type: String
    },
    tools:[{
        type: String
    }],
    link: {
        type: String
    }
});

export default model ('Project', projectSchema)