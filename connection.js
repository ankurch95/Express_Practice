const mongoose = require('mongoose')
async function connectMongoDb(url) {
    return mongoose.connect(url)
        .then(() => console.log('Mongo Db Connected'))
        .catch((err) => console.log('Mongo Db Connection Failed:::', err))
}

module.exports = {
    connectMongoDb
}