const express = require('express')
const app = express()
const stylus = require('stylus')

app.use(require('stylus').middleware(process.argv[3]) || 'public')
app.use(express.static(process.argv[3] || 'public'))

app.get('/form', function(req, res) {
   res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2] || 3000)
