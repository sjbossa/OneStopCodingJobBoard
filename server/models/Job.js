const { Schema, model } = require('mongoose');

const jobSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        }
    }
);

const jobModel = model('JobModel', jobSchema);

module.exports = jobModel;