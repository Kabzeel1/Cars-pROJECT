import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

// GET - localhost:3000/profiles
router.get("/", isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get("/:id", isLoggedIn, profilesCtrl.show)

// POST - localhost:3000/profiles/:id/cars
router.post("/:id/cars", isLoggedIn, profilesCtrl.createCar)

// DELETE - localhost:3000/profiles/cars/:id
router.delete("/:profileId/cars/:carId", isLoggedIn, profilesCtrl.deleteCar)


export {
  router
}