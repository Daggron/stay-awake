const App = require('../models/model');

exports.postUrl = async (req, res) => {
    const { name, url } = req.body;
    const app = new App({
        name,
        url,
    });

    app.save()
    .then(() => {
        res.status(200).json({
            success: true,
            message: 'Data posted successfully'
        })
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    })
}

exports.getAll = async (req, res) => {
    App.find({})
    .select('_id url name')
    .sort({
        name: 1,
    })
    .exec()
    .then(data => {
        res.status(200).json({
            success: true,
            message: 'Data retrieved successfully',
            data,
        })
    })
    .catch(err => {
        console.error(err);
        res.status(504).json({
            success: false,
            message: 'Internal Server Error',
            data: [],
        })
    })
}