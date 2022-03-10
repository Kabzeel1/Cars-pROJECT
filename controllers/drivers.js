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

function create(req, res){
  req.body.owner = req.user.profile._id
 Driver.create(req.body)
 .then(car => {
  res.redirect('/drivers/new')
 })
 .catch(err => {
  res.redirect('/drivers/')
 })
}

function show(req, res) {
  Driver.findById(req.params.id)
  .then(driver => {
    res.render('drivers/show', {
      driver,
      title: "show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/drivers")
  })
}


export{
  index,
  newCar as new,
  create,
  show,
}