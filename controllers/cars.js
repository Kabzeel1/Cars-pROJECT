import { Car } from "../models/car.js"

function newCar(req, res) {
  res.render('cars/new')
}

export{
  newCar as new
}