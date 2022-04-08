const express = require('express')
const app = express()
const path = require('path')
const { readFileSync, writeFileSync } = require('fs')
const { json } = require('express/lib/response')

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve('./public')))


app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('./public/home.html'))
})

app.get('/scores', (req, res) => {
    res.status(200).sendFile(path.resolve('./public/scores.html'))
})

app.get('/addscore', (req, res) => {
    res.status(200).sendFile(path.resolve('./public/addScore.html'))
})

app.get('/contact', (req, res) => {
    res.status(200).sendFile(path.resolve('./public/contact.html'))
})

app.post('/upload', (req, res) => {
    const username = req.body.username
    const score = req.body.score
    writeFileSync(`./public/users/scores/${username}.score.txt`, score.toString());
    writeFileSync(`./public/users/TakenUsers.txt`, username + ',', { flag: 'a' });
    res.status(200).sendFile(path.resolve('./public/upload.html'));
})

app.get('*', (req, res) => {
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})