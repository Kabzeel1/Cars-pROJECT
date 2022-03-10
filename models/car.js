import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})


const carSchema = new Schema({
  title: String,
  model: String,
  engine: String,
  manufactureYear: Number,
  horsePower: Number,
  torque: Number,
  zeroToSixty: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema],
})

const Car = mongoose.model("Car", carSchema)

export {
  Car
}
