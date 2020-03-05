const express = require("express");
const Doctor = require("../models/doctors");
const router = express.Router();


router.get(
    "/",
    async (req, res) => {
        try {
            let doctors = await Doctor.find();
            res.status(200).send(doctors)
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error Get Doctors");
        }
    }
);

module.exports = router;
