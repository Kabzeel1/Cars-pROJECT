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

function edit(req, res) {
  Driver.findById(req.params.id)
  .then(driver => {
    res.render("drivers/edit", {
      driver,
      title: "edit"
    })
  })
  .catch(err => {
    res.redirect("/drivers")
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

function update(req, res) {
  Driver.findById(req.params.id)
  .then(driver => {
    if (driver.owner.equals(req.user.profile._id)) {
      req.body.tasty = !!req.body.tasty
      driver.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/drivers/${req.params.id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/drivers")
  })
}



function show(req, res) {
  Driver.findById(req.params.id)
  .then(driver => {
    res.render('drivers/show', {
      driver,
      title: "Driver"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/drivers")
  })
}

function deletDriver(req, res) {
  Driver.findById(req.params.id) 
  .then(driver => {
    if (driver.owner.equals(req.user.profile._id)) {
    driver.delete()
      .then(() => {
        res.redirect("/drivers")
      })
    } else {
      throw new Error ("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    res.redirect("/drivers")
  })
}  

export{
  index,
  newCar as new,
  create,
  show,
  deletDriver as delete,
  edit,
  update
}