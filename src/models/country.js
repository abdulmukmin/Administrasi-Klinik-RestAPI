import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CountrySchema = new Schema (
  {
    name: {
      type: String
    },
  },
  {
    timestamps: true
  }
)


const Country = mongoose.model("Country", CountrySchema);

export default Country