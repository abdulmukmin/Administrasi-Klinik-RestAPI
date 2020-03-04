import Doctor from '../models/doctor'
import createDoctors from '../util/seedingData/seedDoctor'

module.exports = {
  // seed data
  createDummy: (req,res) => {
    createDoctors()
    res.status(200).json({
      message: `all data has been created`
    })
  },

  //  get all doctor data
  getAll: (req,res) => {
    Doctor.find({})
    .then((data) => {
      res.status(200).json({
        data,
        message: `get all data`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `data failure to get`
      })
    })
  },
  create: (req,res) => {
    // let data = {

    // }
  },
  // to delete all posted link
  deleteAll: (req,res) => {
    Doctor.remove({})
      .then((data) => {
        res.status(200).json({
          data,
          message: `all doctor has been removed`
        })
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: `doctors failure to remove`
        })
      })
  }
}