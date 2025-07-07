const express = require('express')
const app = express()
app.use(express.json())

// path: http://localhost:3001/api/persons

let persons = [
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

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
  const personsInfo = persons.length;
  const d = new Date();
  response.send(`<p>persons has info for ${personsInfo} </p> <p>${d}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  //console.log(id)
  //console.log(typeof id)
  const person = persons.find(person => person.id === id)
  response.send(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id) // crea un nuevo array pero sin la persona con el id

  response.status(202).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  const person = {
    id: Math.floor(Math.random() * 100000000),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  response.status(201).json(person) // paso el objeto person a JSON
})

PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})  