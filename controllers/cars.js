import { Car } from "../models/car.js"

function newCar(req, res) {
  res.render('cars/new',{
    title: "title"
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id
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
  .populate("owner")
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

function update(req, res){
  Car.findByIdAndUpdate(req.params.id)
  .then(car => {
    res.redirect(`/cars/${car.id}`)
  })
  .catch(err => {
    res.redirect("/cars")
  })
}

function deletCar(req, res) {
  Car.findById(req.params.id) 
  .then(car => {
    if (car.owner.equals(req.user.profile._id)) {
      car.delete()
      .then(() => {
        res.redirect("/cars")
      })
    } else {
      throw new Error ("NOT AUTHORIZED")
    }
  })
  .catch(err => {
  res.redirect("/cars")
  })
}

function createReview(req, res) {
  Car.findById(req.params.id, function(err, car) {
    car.reviews.push(req.body)
    car.save(function(err) {
      res.redirect(`/cars/${car._id}`)
    })
  })
}


export{
  newCar as new,
  create,
  index,
  show,
  edit,
  update,
  deletCar as delete,
  createReview
}