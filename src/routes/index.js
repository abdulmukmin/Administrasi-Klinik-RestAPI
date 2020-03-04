// routes/index.js
import express from 'express';
import doctor from './doctor'
import patient from './patient'
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(`here`)
  res.status(200).json({
    message: `Mumin Amis`
  })
});
router.use('/doctor', doctor)
router.use('/patient', patient)


export default router;