import express from 'express'
import config from 'config'
import mongoose from 'mongoose';
import peopleRoutes from './routes/people.routes.js';

const app = express()
const PORT = config.get('port')

app.use(express.json())
app.use('/api', peopleRoutes)

async function startServer() {
  try {
    await mongoose.connect(config.get('dBUrl'))
    app.listen(PORT, () => console.log(`Server started on port ${PORT}, url: http://localhost:${PORT}/`))
  } catch (e) {
    console.log(e)
  }
}

startServer()