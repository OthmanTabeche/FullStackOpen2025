import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.set("strictQuery", false)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB")
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.models.Person || mongoose.model("Person", personSchema)
