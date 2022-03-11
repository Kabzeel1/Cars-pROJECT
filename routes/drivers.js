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
// GET - localhost:3000/cars/:id/edit
router.get("/:id/edit", driversCtrl.edit)


// POST - localhost:3000/drivers
router.post('/', isLoggedIn, driversCtrl.create)
//DELETE - Localhost:3000/drivers
router.delete('/:id', isLoggedIn, driversCtrl.delete)
// PUT - localhost:3000/cars/:id
router.put("/:id", driversCtrl.update)


export{
  router
}