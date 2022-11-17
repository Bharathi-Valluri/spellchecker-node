const express = require('express')
const router = require('../source/routers/router')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

async function run () {
  try {
    console.log('connected to the database')
    app.use('/', router)
    app.listen(process.env.PORT, () => {
      console.log(`serveris running on port no:${process.env.PORT}`)
    })
  } catch (error) {
    console.log('server is not running at port 3993' + error)
  }
}
run()
