const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
    createdAt: {
        type: Date
    },
    // updateAt: {
    //     type: Date, default: Date.now
    // },
    __V: {
        type: Number
    }
}, {timestamps: true });

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;