import mongoose from "mongoose"

const Schema = mongoose.Schema

const driverSchema = new Schema({
  first: String,
  last: String,
  gender: String,
  birth: Number,
  insta: String,
  facebook: String,
})

const Driver = mongoose.model("Driver", driverSchema)

export {
  Driver
}
