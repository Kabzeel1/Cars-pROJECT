import { Car } from "../models/car.js"

function newCar(req, res) {
  res.render('cars/new',{
    title: "title"
  })
}

function create(req, res){
 Car.create(req.body)
 .then(car => {
  res.redirect('/cars/new')
 })
 .catch(err => {
  res.redirect('/cars/')
 })
}

function index(req, res){
  Car.find({})
  .then(cars => {
    res.render('cars/index',{
      cars: cars,
      title: 'All Cars',
    })
  })
  .catch(err => {
    res.redirect('/cars')
  })
}

function show(req, res){
  Car.findById(req.params.id)
  .then(car => {
    res.render('cars/show',{
      car: car,
      title: 'Cars'
    })
  })
  .catch(err => {
  res.redirect('/cars')
  })
}

function edit(req, res) {
  Car.findById(req.params.id)
  .then(car => {
    res.render("cars/edit", {
      car,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/cars")
  })
}

export{
  newCar as new,
  create,
  index,
  show,
  edit,
}