const express = require('express')

const router = express.Router()

const aboutMe = {
  description: {
    question: "Tell me a little bit about yourself?",
    answer: "I am an enthusiastic full-stack web developer, " +
            "experienced in Ruby on Rails and JavaScript based " +
            "programming, with a background in software quality " +
            "assurance and practical experience in Agile software " +
            "development methodologies, seeks a position to apply skills, " +
            "learn new technologies and contribute to community."
  },
  tech: {
    question: "What excites you about technology?",
    answer: "It's a whole universe where you can create and contribute " +
            "using things created by others, and you can take technology " +
            "on the other level. It's amazing to see how technology " +
            "changes our lives to a better way!"
  },
  techstack: {
    question: "What is your preferred technology stack?",
    answer: "Ruby, Rails, SQL, JavaScript, React, Redux, CSS, HTML"
  },
  hobbies: {
    question: "What are your favorite hobbies?",
    answer: "My Harley Iron 883 was my favorite hobby, " +
            "but I had to sell it to pay my bills during the " +
            "coding bootcamp program :( " +
            "Also I love mountain hiking and climbing :)"
  }
}

router.get('/', (req,res) => {
  res.writeHead(200, {'content-type' : 'application/json'})
  res.write( JSON.stringify(aboutMe) )
  res.end()
})

router.get('/:q', (req,res) => {
  if (!aboutMe[req.params.q]) {
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write("Not Found")
    res.end()
  } else {
    res.writeHead(200, {'content-type' : 'application/json'})
    res.write( JSON.stringify(aboutMe[req.params.q]) )
    res.end()
  }
})

module.exports = router