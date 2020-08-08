const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        required: true,
    }
});

const app = mongoose.model('App', appSchema);

module.exports = app;