const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/cloud', { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema

const musicSchema = new Schema({
    song: '',
    singer: ''
})

const Music = mongoose.model('Music', musicSchema, 'music')

module.exports = Music