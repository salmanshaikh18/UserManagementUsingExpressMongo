const mongoose = require('mongoose')

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`Conneted to DB: ${conn.connection.host}`)
    })
    .catch((err) => {
        console.log(err.message)
        throw err
    })
}

module.exports = connectToDb