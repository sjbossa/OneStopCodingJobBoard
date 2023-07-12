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
    maxExpectedSalary: {
      type: Number,
      required: true,
    },
    specification: {
      type: String,
      required: true,
    },
    minimumYearsRequired: {
      type: Number,
      required: true,
    },
    minimumEducationRequired:{
      type: String,
      required:true,
    } 
  }
);

const Job = model('Job', jobSchema);

module.exports = Job;