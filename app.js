const express = require('express')
// const cors = require('cors')
const app = express()

app.set('view engine', 'ejs')

// Import Routes
const indexRoute = require('./routes/index')
const postsRoute = require('./routes/posts')
const aboutRoute = require('./routes/aboutMe')

// app.use(cors())

app.use('/', indexRoute)
app.use('/posts', postsRoute)
app.use('/aboutme', aboutRoute)

// Routes
// app.get('/', (req,res) => {
//   res.send("We're on home")
// })


// Server
app.listen(3000)

