const Music = require('./music')

const music = new Music({
    song: '山丘(live)',
    singer: '李宗盛'
})

music.save().then(res => {
    console.log(res)
})