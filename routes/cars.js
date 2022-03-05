import { Router } from 'express'
import * as carsCtrl from "../controllers/cars.js"
import { isLoggedIn } from '../middleware/middleware.js'