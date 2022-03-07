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

export{
  index,
  newCar as new,
}