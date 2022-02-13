const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a Name']
    },

    email: {
        type: String,
        required: [true, 'Please add a Email'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Please add a Password']
    },

    grade: {
        type: String,
        required: [true, 'Please add a Grade ']
    },

    section: {
        type: String,
        required: [true, 'Please add a Section']
    },

},{
    timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema);