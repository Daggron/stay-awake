const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const scheduler = require('./services');
const path = require('path');

const uri = 'mongodb+srv://stay-awake:stay-awake@stay-awake.r19fl.mongodb.net/Clusters?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Db successfully connected');
});

db.on('error', (err) => {
    console.error(err);
})

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'stayawake','dist')));
scheduler();

app.use('/post', require('./routes/index'));
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'stayawake','dist','index.html'));
});



const port = 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})