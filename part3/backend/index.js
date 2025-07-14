const express = require('express')
const app = express()

let phonebook = [
  { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const getRandomId = () => {
  return Math.floor(Math.random() * 99494559505986)
}

app.get('/api/persons', (request, response) => {
  response.json(phonebook)
})

app.get('/info', (request, response) => {
  let phonebookLength = phonebook.length
  let time = Date()
  let content = `<p>Phonebook has info for ${phonebookLength} people</p><p>${time}</p>`
  response.send(content)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = phonebook.find(person => person.id === id)

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = phonebook.filter(person => person.id !== id)

  response.status(202).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(body)

  if (!body.name || !body.number) {
    return response.status(404).json({ error: 'ERROR' })
  }

  let duplicateName = phonebook.find(person => person.name === body.name)

  if(duplicateName) {
    return response.status(404).json({ error: 'name must be unique' })
  }

  const newPerson = {
    "id" : getRandomId(),
    "name" : body.name,
    "number": body.number
  }

  phonebook = phonebook.concat(newPerson)

  response.status(201).json(newPerson)
})

PORT = 3001
app.listen(PORT, () => {
  console.log('The APP is running in the port 3001')
})