const express = require('express')
const urlRoute = require('./routes/url')
const { connectToDB } = require('./connect')
const URL = require('./model/url')
const app = express()
const PORT = process.env.PORT || 8001

connectToDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log('MongoDb Connected'))
    .catch((err) => console.log('MongoDb Connection Failed:::', err))

app.use(express.json())
app.use('/url', urlRoute)
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({ shortId }, {
        $push:
        {
            visitHistory: {timeStamp: Date.now()}
        }
    }
)
console.log(entry)
res.redirect(entry.redirectURL?entry.redirectURL:'https://facebook.com') 
})
app.listen(PORT, () => console.log(`Port is running at ${PORT}`))