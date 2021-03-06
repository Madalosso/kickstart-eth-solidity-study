// server.js
const next = require('next');

const app = next({dev: process.env.NODE_ENV !== 'production'})

const routes = require('./routes')
const handler = routes.getRequestHandler(app)


// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000, (error) => {
      if (error) throw error;
      console.log('Ready on localhost:3000')
  })
})