const { Schema, model } = require('mongoose');

const companySchema = new Schema(
    {
        Name:{
            type: String,
            required: true,
        },
        ProfilePicture: {
            type: String,
            required: true,
        },
        CompanyDescription:{
            type: String,
            required: true,
        },
        Address:{
            type: String,
            required: true,
            unique: true,
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
        Postings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'JobPosted'
            }
        ],
    }
);

const Company = model('Company', companySchema);

module.exports = Company;