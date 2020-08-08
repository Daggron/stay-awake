const cronJob = require('node-cron');
const fetch = require('./task');

function scheduler() {
    cronJob.schedule('* * * * *', () => {
        console.log('called');
        fetch();
    });    
} 

module.exports = scheduler;