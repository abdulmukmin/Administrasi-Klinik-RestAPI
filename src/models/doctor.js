const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const generatePassword = require("../helpers/generatePassword");
const bcrypt = require("bcryptjs");


var doctorSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "name is required"]
    },
    title: {
      type: String,
      required: [true, "title is required"]
    },
    username: {
      type: String,
      required: [true, "username is required"]
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "password min 6 character"]
    },
    email: {
      type: String,
      // unique: true,
      lowercase: true,
      validate: {
        validator(val) {
          var emailRegex = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          if(!emailRegex.test(val)){
            throw new Error('your email is not valid');
          }
        }
      },
      required: [true, "email is required"]
    },
    birthdate: {
      type: Date,
      required: [true, "birthdate is required"]
    },
    birthplace: {
      type: String,
      required: [true, "birthplace is required"]
    },
    phoneNumber: {
      type: String,
      required: [true, "phone number is required"]
    },
    address: {
      type: String,
      required: [true, "address is required"]
    },
    city: {
      type: String,
      required: [true, "city is required"]
    },
    province: {
      type: String,
      required: [true, "province is required"]
    },
    zipCode: {
      type: String,
      required: [true, "postalCode is required"]
    },
    country: {
      type: String,
      required: [true, "country is required"]
    },
    nik: {
      type: String,
      required: [true, "nik is required"]
    },
  },
  {
    timestamps: true
  }
);

// doctorSchema.post("validate", doc => {
//   doc.password = bcrypt.hashSync(
//     doc.password,
//     Number(process.env.SALT_PASSWORD)
//   );
// });

// doctorSchema.post("save", function(user) {
//   generatePassword(this.email, this.password).then(function(newPassword) {
//     User.update({ _id: user._id }, { password: newPassword })
//       .then(function() {})
//       .catch(function() {});
//   });
// });

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
