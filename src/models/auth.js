const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
},{ versionKey: false });

// export model user with AuthSchema
module.exports = mongoose.model("auth", AuthSchema);