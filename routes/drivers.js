import { Router } from 'express'
import * as driversCtrl from "../controllers/drivers.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET - Localhost: 3000/drivers
router.get('/', driversCtrl.index)
//GET - Localhost:3000/driverss/new
router.get('/new', isLoggedIn,  driversCtrl.new)
//GET - Localhost: 3000/cars/:id
router.get('/:id', isLoggedIn, driversCtrl.show)

// POST - localhost:3000/drivers
router.post('/', isLoggedIn, driversCtrl.create)
//DELETE - Localhost:3000/drivers
router.delete('/:id', isLoggedIn, driversCtrl.delete)

export{
  router
}