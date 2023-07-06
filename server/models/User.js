const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        isCompany:{
            type:Boolean,
            required: true,
        },
        name:{
            type:String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password:{
            type: String,
            required: true,
            minlength: 5,
        }
    }
);

const userModel = model('userModel', userSchema);

module.exports = userModel;