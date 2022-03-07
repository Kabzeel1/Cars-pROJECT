import { Router } from 'express'
import * as driversCtrl from "../controllers/drivers.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET - Localhost: 3000/drivers
router.get('/', driversCtrl.index)



export{
  router
}