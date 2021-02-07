const mongoose = require('mongoose');

const myworkSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
});

module.exports = mongoose.model('myworkdata',myworkSchema);