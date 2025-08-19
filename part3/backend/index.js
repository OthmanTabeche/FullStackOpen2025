import express, { request, response } from "express";
const app = express()

app.use(express.json())


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

const getNewId = () => {
    const maxId = phonebook.length > 0 ? Math.max(...phonebook.map (n => n.id)) : 0
    return maxId + 1
}

app.get('/api/persons', (_req, res) => {
    res.send(phonebook)
})

app.get('/info', (_req, res) => {
    const persons = phonebook.length    
    const date = Date()
    res.send(`<p>Phonebook has info for ${persons} people</p> <p>${date}</p>`)
})

app.get('/api/persons/:id', (_req, res) => {
    const id = Number(_req.params.id)
    const person = phonebook.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).json({"messege": "Person not found, try another id"})
    }
})

app.delete('/api/persons/:id', (_req, res) => {
    const id = Number(_req.params.id)
    phonebook = phonebook.filter(person => person.id !== id)
    
    res.status(204).end()
})

app.post('/api/persons', (_req, res) => {
    const body = _req.body
    const name = body.name
    const number = body.number

    if (!name || !number) {
        return res.status(400).json({ error: 'check the name or the number' })
    }

    const existsName = phonebook.find(person => person.name === String(name))

    if (existsName) {
        return res.status(400).json({ error: 'name must be unique' })
    }

    const person = {
        id: getNewId(),
        name: name,
        number: number
    }


    phonebook = phonebook.concat(person)
    res.status(201).json(person)

})

const PORT = 3001
app.listen(PORT, () => (
    console.log(`Server running on port ${PORT}`)
))  