import mongoose from "mongoose";

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://otabeche:${password}@cluster0.anue3hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set('strictQuery',false)

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Person = mongoose.model("Person", personSchema)

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB')
    
    if (process.argv.length > 4) {
        const name = process.argv[3]
        const number = process.argv[4]

        const person = new Person({
            name: name,
            number: number
        })

        person.save().then(res => {
            console.log(`added ${name} number ${number} to phonebook`)
            mongoose.connection.close()
        })
    }

    if (process.argv.length === 3) {
        Person.find({}).then(res => {
            console.log('phonebook:')
            res.forEach(person => {
                console.log(person)
            })
            mongoose.connection.close()
        })
    }
  })
  .catch(error => {
    console.log('Error connecting to MongoDB:', error.message)
    process.exit(1)
  })
