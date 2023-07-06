const { Schema, model } = require('mongoose');

const jobSeekerSchema = new Schema(
    {
        Name:{
            type: String,
            required: true,
        },
        Description:{
            type: String,
        },
        ProfilePicture: {
            type: String,
        },
        Age: {
            type: Number,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        Password: {
            type: String,
            required:true,
            /*At least one alphabetical character
            At least one digit
            At least one special character from the set [@, $, !, %, *, #, ?, &]
            Minimum length of 8 characters*/
            match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/]
        },
        PhoneNumber: {
            type: String,
            //American phone number regex
            match: [/^\+\d{1,3}\s?\d{1,14}$/, 'Must match a valid phone number format.']
        },
        Address: {
            type: String,
        },
        jobsAppliedTo: [
            {
                type: Schema.Types.ObjectId,
                ref: 'JobPosted'
            }
        ],
        jobsViewed: [
            {
                type: Schema.Types.ObjectId,
                ref: 'JobPosted'
            }
        ],
        //TODO: FLESH OUT SKILLS
        /*Skill: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Class'
            }
        ],*/
    }
);

const JobSeeker = model('JobSeeker', jobSeekerSchema);

module.exports = JobSeeker;