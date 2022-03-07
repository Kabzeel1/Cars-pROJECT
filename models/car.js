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
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Car = mongoose.model("Car", carSchema)

export {
  Car
}
