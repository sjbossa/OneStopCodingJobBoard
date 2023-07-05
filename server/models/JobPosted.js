const { Schema, model } = require('mongoose');

const jobPostedSchema = new Schema(
    {
        JobTitle: {
            type: String,
            required: true,
        },
        JobType: {
            type: String,
            required: true,
        } ,
        //TODO: FLESH OUT SKILLS
        /*Skill: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Class'
            }
        ],*/
        MinimumEducation: {
            type: String,
        },
        Salary: {
            type: Number,
        },
        Shift: {
            type: String,
            required: true,
        },
        DateCreated: {
            type: Number,
            required: true,
        },
        RemoteWork: {
            type: Boolean,
            required: true,
        },
        Industry: {
            type: String,
            required: true,
        }
        //TODO: PostedBy
    }
);

const JobPosted = model('JobPosted', jobPostedSchema);

module.exports = JobPosted;