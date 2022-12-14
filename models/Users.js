const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    passcode: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Users', UserSchema);