const mongoose = require('mongoose');

const candiSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    candidate: {
        type: String,
        required: [true, 'Please add a text Value']
    },
    position: {
        type: String,
        required: [true, 'Please add a text Value']
    },
    party: {
        type: String,
        required: [true, 'Please add a text Value']
    },
    votes: {
        type: Number,
    },
},{
    timestamps: true,
})


module.exports = mongoose.model('Candidate', candiSchema)