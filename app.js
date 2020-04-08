const server = require('./http.js')

console.log('Hello!')

server.listen(3000, () => console.log('Server is up and running'))
