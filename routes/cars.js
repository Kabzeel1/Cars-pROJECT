import { Router } from 'express'
import * as carsCtrl from "../controllers/cars.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET - Localhost:3000/cars/new
router.get('/new', carsCtrl.new)
//GET - Localhost: 3000/cars
router.get('/', carsCtrl.index)
//GET - Localhost: 3000/cars/:id
router.get('/:id', carsCtrl.show)


//Post - localhost:3000/cars
router.post('/', carsCtrl.create)


export{
  router
}