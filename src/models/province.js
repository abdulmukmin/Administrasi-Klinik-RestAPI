import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProvinceSchema = new Schema (
  {
    name: {
      type: String
    },
  },
  {
    timestamps: true
  }
)


const Province = mongoose.model("Province", ProvinceSchema);

export default Province