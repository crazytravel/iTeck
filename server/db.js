const mongoose = require('mongoose')
const MONGODB_URL = require('server.config').DB_URI

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.connection
            .on('error', error => reject(error))
            .on('close', () => console.log('Database connection closed.'))
            .once('open', () => resolve(mongoose.connections[0]))

        mongoose.connect(MONGODB_URL, {useMongoClient: true})
    })
}
