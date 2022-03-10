import mongoose from 'mongoose'

const favSchema = new mongoose.Schema({
  title: String,
  model: String,
  engine: String,
  manufactureYear: Number,
  horsePower: Number,
  torque: Number,
  zeroToSixty: String,
}, {
  timestamps: true,
})


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  cars: [favSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
