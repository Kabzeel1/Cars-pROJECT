import mongoose from "mongoose"

const Schema = mongoose.Schema

const expensiveSchema = new Schema({
  make: String,
  model: String,
  price: Number,
  count:Number,
})

const Expensive = mongoose.model("Car", expensiveSchema)

export {
  Expensive
}
