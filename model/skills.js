const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill : String
});

module.exports = mongoose.model('skilldata', skillSchema);