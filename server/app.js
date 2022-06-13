import express from 'express'
import config from 'config'
import mongoose from 'mongoose';

const app = express()
const PORT = config.get('port')

app.get('/', (req, res) => {
  res.json('Hello!')
})

async function startServer() {
  try {
    await mongoose.connect(config.get('dBUrl'))
    app.listen(PORT, () => console.log(`Server started on port ${PORT}, url: http://localhost:${PORT}/`))
  } catch (e) {
    console.log(e)
  }
}

startServer()