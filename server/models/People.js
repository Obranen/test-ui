import mongoose from 'mongoose'

const People = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

export default mongoose.model('People', People)