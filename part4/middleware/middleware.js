const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "unknown endpoint" })
}

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" })
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message })
  } else if (error.name === "MongoServerError" && error.code === 11000) {
    // ejemplo: índice único violado
    return res.status(400).json({ error: "duplicate key error" })
  }

  // error genérico
  res.status(500).json({ error: "server error" })
}

export default {unknownEndpoint, errorHandler}