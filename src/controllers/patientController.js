import Patient from '../models/patient'
import createPatient from '../util/seedingData/seedPatient'

module.exports = {
  // seed data
  createDummy: (req,res) => {
    createPatient()
    res.status(200).json({
      message: `all data has been created`
    })
  },

  //  get all patient data
  getAll: (req,res) => {
    Patient.find({})
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
    Patient.remove({})
      .then((data) => {
        res.status(200).json({
          data,
          message: `all patient has been removed`
        })
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: `patients failure to remove`
        })
      })
  }
}