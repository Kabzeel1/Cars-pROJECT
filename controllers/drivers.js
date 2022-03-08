import { Driver } from "../models/driver.js"

function index(req, res){
  Driver.find({})
  .then(drivers => {
    res.render('drivers/index',{
      drivers: drivers,
      title: 'All Drivers',
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function newCar(req, res) {
  res.render('drivers/new', {
    title: "Add Movie"
  })
}

unction create(req, res){
  req.body.owner = req.user.profile._id
 Car.create(req.body)
 .then(car => {
  res.redirect('/cars/new')
 })
 .catch(err => {
  res.redirect('/cars/')
 })
}

export{
  index,
  newCar as new,
}