const mongoose = require('mongoose')
const express = require('express')
const app = express()
const morgan = require('morgan')
const Person = require('./models/person')
require('dotenv').config()

app.use(express.json()) 
app.use(morgan('tiny'))
const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)


app.get('/api/persons', (request, response) => {
  Person.find({})
    .then(persons => {
      response.json(persons)
    })
    .catch(error => {
      console.log(error)
      response.status(500).end()
    })
})

app.get('/info', (request, response) => {
  Person.countDocuments({})
    .then(count => {
      let time = Date()
      let content = `<p>Phonebook has info for ${count} people</p><p>${time}</p>`
      response.send(content)
    .catch(error => {
      console.log(error)
      response.status(500).end()
    })
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(() => {
      response.status(202).end()
    .catch(error => {
      console.log(error)
      response.status(500).end()
    })
  })
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(body)

  if (!body.name || !body.number) {
    return response.status(404).json({ error: 'ERROR' })
  }

  const person = new Person ({
    name : body.name,
    number: body.number,
  })

  person.save().then(personSaved => {
    response.status(202).json(personSaved)
  })
})

PORT = 3001
app.listen(PORT, () => {
  console.log('The APP is running in the port 3001')
})