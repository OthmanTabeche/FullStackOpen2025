const express = require('express')
const app = express()

// path: http://localhost:3001/api/persons

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

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/info', (request, response) => {
  let phonebookInfo = phonebook.length;
  let d = new Date();
  response.send(`<p>Phonebook has info for ${phonebookInfo} </p> <p>${d}</p>`)
})

PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})  