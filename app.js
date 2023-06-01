require('dotenv').config()
require('express-async-errors')
const express = require('express')

// DATABASE
const connectDB = require('./db/connect')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express();

// Use middleware to see json object
app.use(express.json())

// Home route
app.get('/', (req, res)=>{
  res.send('e-commerce api')
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000

const start = async  () =>{
  try{

    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`listening to ${port}...`))

  }catch (error) {
     console.log(error)
  }
}

start()

