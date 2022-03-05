import { Car } from "../models/car.js"

function newCar(req, res) {
  res.render('cars/new')
}

function create(res, req){
  
}

export{
  newCar as new,
  create
}