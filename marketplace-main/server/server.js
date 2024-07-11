import config from './../config/config.js'
import app from './express.js'
import mongoose from 'mongoose'
// import bidding from './controllers/bidding.controller.js'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
mongoose.connection.on('error', (err) => {
  console.error(err)
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

const server = app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

// bidding(server)
