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
  Math.floor(Math.random() * 99494559505986)
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

PORT = 3001
app.listen(PORT, () => {
  console.log('The APP is running in the port 3001')
})