import express from "express";
import cors from "cors";
import morgan from "morgan";
import Person from "./models/person.js"
import middleware from "./middleware/middleware.js";

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms: body'))

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person
        .findById(req.params.id)
        .then(person => {
            res.json(person)
        })
})


app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(201).end())
    .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
    const { name, number } = req.body

    if (!name || !number) {
        return res.status(400).json({ error: 'check the name or the number' })
    }

    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(savedPerson => {
        res.status(201).json(savedPerson)
    })

})

app.use(middleware.unknownEndpoint)

app.use(middleware.errorHandler)

const PORT = 3001
app.listen(PORT, () => (
    console.log(`Server running on port ${PORT}`)
))  