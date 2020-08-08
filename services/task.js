const App = require('../models/model');
const { default: Axios } = require('axios');

async function fetch() {
    try {
        const apps = await App.find({}).select('url').exec();
        apps.map(({ url }) => {
            Axios.get(`https://${url}`)
            .then(response => {
                if(response.status === 200 || response.statusText === 'OK') {
                    console.log('Called Successfully');
                }
            })
            .catch(err => {
                console.error(`An error occurred while making call to ${url} ${err}`);
            })
        })

    } catch (err) {
        console.error(`Error at cron job ${err}`);
    }
}

module.exports = fetch;