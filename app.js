require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const postRouter = require('./routing/post-router')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.DB_ROUTE, {useNewUrlParser: true})
const connection = mongoose.connection

connection.once('open', () => console.log('mongoose is connected'))

app.use('/', postRouter)

app.listen(port, () => {console.log('running on port ' + port)})