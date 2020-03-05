const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  place_of_birth: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  izin_praktek: {
    type: Boolean,
    required: true
  },
  poli_id: {
    type: Number,
    required: true
  },
});


// export model user with AuthSchema
module.exports = mongoose.model("doctor", DoctorSchema);