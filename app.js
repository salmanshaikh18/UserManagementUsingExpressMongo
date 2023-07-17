const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
require('dotenv').config()
const connectToDb = require('./config/db')

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', userRouter)
app.use('/registeruser', userRouter)
app.use('/loginuser', userRouter)

connectToDb();

module.exports = app