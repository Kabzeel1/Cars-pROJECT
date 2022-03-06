import mongoose from "mongoose"

const Schema = mongoose.Schema

const carSchema = new Schema({
  title: String,
  model: String,
  engine: String,
  manufactureYear: Number,
  horsePower: Number,
  torque: Number,
  zeroToSixty: String,
  price: String,
})

const Car = mongoose.model("Car", carSchema)

export {
  Car
}
