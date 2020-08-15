const cronJob = require('node-cron');
const fetch = require('./task');

function scheduler() {
    cronJob.schedule('*/30 * * * *', () => {
        console.log('called');
        fetch();
    });    
} 

module.exports = scheduler;