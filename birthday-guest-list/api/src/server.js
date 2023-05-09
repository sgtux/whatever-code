const express = require('express')
const bodyParser = require('body-parser')
const stream = require('stream')

const app = express()

app.use(bodyParser.json())

app.post('/export', (req, res) => {
    const readStream = new stream.PassThrough()
    readStream.end(JSON.stringify(req.body))
    res.set('Content-disposition', 'attachment; filename=data.json')
    res.set('Content-Type', 'application/json')
    readStream.pipe(res)
})

const PORT = process.env.PORT || 8090

app.listen(PORT, () => console.log(`Listening on ${PORT} port.`))