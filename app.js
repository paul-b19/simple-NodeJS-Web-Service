const express = require('express')

const app = express()

// Import Routes
const indexRoute = require('./routes/index')
const postsRoute = require('./routes/posts')
const aboutRoute = require('./routes/aboutMe')

app.set('view engine', 'ejs')

app.use('/', indexRoute)
app.use('/posts', postsRoute)
app.use('/aboutme', aboutRoute)

app.get('/*', (req,res) => {
  res.send("Not Found")
})

// Server
app.listen(3000)

