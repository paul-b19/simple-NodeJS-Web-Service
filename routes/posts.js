const express = require('express')

const router = express.Router()

let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(resp => data = resp)

// req.params.id
  

router.get('/', (req,res) => {
  res.render('posts', { posts: posts() })
})

module.exports = router