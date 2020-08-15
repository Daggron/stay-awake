const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    }
});

const app = mongoose.model('App', appSchema);

module.exports = app;