import Router from 'express'
import {PeopleControllers} from '../controllers/PeopleControllers.js';

const router = new Router()
const {create} = PeopleControllers()

router.post('/user/create', create);

export default router