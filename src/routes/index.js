// routes/index.js
import express from 'express';
import doctor from './doctor'
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(`here`)
  res.status(200).json({
    message: `index page`
  })
});
router.use('/doctor', doctor)


export default router;