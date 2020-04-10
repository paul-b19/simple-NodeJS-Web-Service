const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

const url = "https://jsonplaceholder.typicode.com/posts"

const fetchPosts = async url => {
  try {
    const resp = await fetch(url)
    const posts = await resp.json()
    return posts
  } catch (error) {
    console.log(error)
  }
}

router.get('/', async (req,res) => {
  const posts = await fetchPosts(url)
  res.render('posts', { posts: posts })
})

module.exports = router