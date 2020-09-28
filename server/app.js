const express = require('express')
const Music = require('./model/music')
const app = new express()
app.get('/music', (req, res) => {
    // console.log(1)
    Music.find().then(mon => {
        // console.log(mon)
        res.json({
            code: 20000,
            list: mon
        })
    })

})



app.listen(8888, '127.0.0.1')