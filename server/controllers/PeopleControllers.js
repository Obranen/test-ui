import People from '../models/People.js';

export const PeopleControllers = () => {
  const create = async (req, res) => {
    const {username, email} = req.body
    const review = await People.create({username, email})
    res.json(review)
  }

  return {create}
}