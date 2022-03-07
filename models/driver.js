import mongoose from "mongoose"

const Schema = mongoose.Schema

const driverSchema = new Schema({

})

const Driver = mongoose.model("Driver", driverSchema)

export {
  Driver
}
