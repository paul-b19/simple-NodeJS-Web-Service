const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

router.get('/', (req,res) => {
  // res.send("We're on index")

  // fs.readFile(path.join(__dirname, '../index.html'), (err, data) => {
  //   res.writeHead(200, {'content-type' : 'text/html'})
  //   res.write(data)
  //   res.end()
  // })

  res.render('index')
})

module.exports = router