const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
    journey : String
});

module.exports = mongoose.model('journeydata', journeySchema);