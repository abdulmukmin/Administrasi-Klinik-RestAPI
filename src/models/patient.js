const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const generatePassword = require("../helpers/generatePassword");
const bcrypt = require("bcryptjs");


var userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "name is requires"]
    },
    picture: {
      type: String
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
    address_rt: {
      type: String,
      required: [true, "RT is required"]
    },
    address_rw: {
      type: String,
      required: [true, "RW is required"]
    },
    villageOffice: {
      type: String,
      required: [true, "kelurahan is required"]
    },
    subDistrict: {
      type: String,
      required: [true, "kecamatan is required"]
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
    marriageStatus: {
      type: String,
      required: [true, "marriage status is required"]
    },
    bloodType: {
      type: String,
      required: [true, "blood type is required"]
    },
    occupation: {
      type: String,
      required: [true, "occupation is required"]
    },
  },
  {
    timestamps: true
  }
);

// userSchema.post("validate", doc => {
//   doc.password = bcrypt.hashSync(
//     doc.password,
//     Number(process.env.SALT_PASSWORD)
//   );
// });

// userSchema.post("save", function(user) {
//   generatePassword(this.email, this.password).then(function(newPassword) {
//     User.update({ _id: user._id }, { password: newPassword })
//       .then(function() {})
//       .catch(function() {});
//   });
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
