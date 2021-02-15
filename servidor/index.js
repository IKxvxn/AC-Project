require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoute = require('./routes/authRoute')
const homeRoute = require('./routes/homeRoute')

const app = express()

app.set('port', process.env.PORT || 8079)

mongoose.connect(
  "mongodb+srv://master:Imaster@cluster0.r3eqn.mongodb.net/RCProject?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors())
app.use(express.json());

app.use('/home', homeRoute)
app.use('/auth', authRoute)

app.get('/', (req, res) => {
  res.send('server root :)')
})

app.listen(app.get('port'), err => {
  if (err) return console.log(`Ha ocurrido un error ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})






