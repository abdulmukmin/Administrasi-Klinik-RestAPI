import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ZipCodeSchema = new Schema (
  {
    name: {
      type: String
    },
  },
  {
    timestamps: true
  }
)

const ZipCode = mongoose.model("ZipCode", ZipCodeSchema);

export default ZipCode
