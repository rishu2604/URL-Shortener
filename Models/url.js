const mongoose = require('mongoose');

// Schema
const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String, 
        unique: true,
        required: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{
        timestamp: {type: Number}
    }]
}, {timestamps: true});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;