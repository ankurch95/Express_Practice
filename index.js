const express = require('express')
const { connectMongoDb } = require('./connection')
const userRouter = require('./routes/user')
const { logReqRes } = require('./middlewares')
const app = express()
const PORT = process.env.PORT || 8000

// connection
connectMongoDb('mongodb_url')

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes('./log.txt'))

// routes
app.use('/api/users', userRouter)
app.listen(PORT, () => console.log(`Port is running at ${PORT}`));

