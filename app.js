const express = require('express')
require('dotenv');
const connect = require('./db/connect')

const app = express();

const port = process.env.PORT || 5000

const start = async  () =>{
  try{

    connect(process.env.MONGO_URI)
    app.listen(port, console.log(`listening to ${port}...`))
    
  }catch (error) {
     console.log(error)
  }
}

start()

