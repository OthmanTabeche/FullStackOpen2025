const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
} 

const password = process.argv[2]

// Variables en las cuales guardo el nombre y el numero pasado por la linea de comandos
const name = process.argv[3]
const number = process.argv[4]

const url =
    `mongodb+srv://othman:${password}@cluster0.zq28ubw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 4) {
    const person = new Person({
        name: name,
        number: number,
    })

    person.save().then(result => {
        console.log('persone saved in the phonebook')
        mongoose.connection.close()
    })
}

if (process.argv.length === 3) {
    console.log("phonebook")
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name)
            console.log(person.number)
        })
        mongoose.connection.close()
    })
}