const mongoose = require('mongoose')

const Song = mongoose.model('Song', {
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    suggestor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    playback_uri: {
        type: String
    }
})

module.exports = Song