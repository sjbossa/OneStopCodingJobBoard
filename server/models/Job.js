const { Schema, model } = require('mongoose');

const jobSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
  }
);

const Job = model('Job', jobSchema);

module.exports = Job;