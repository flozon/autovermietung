const router = require('express').Router();
let Car = require('../models');
const multer = require('multer');

router.route('/').get((req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err));
});

const storage = multer.diskStorage({
  destination: './images',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage }).fields([{ name: 'add_main_picture' }, { name: 'add_additional_picture' }])

router.route('/add').post(upload, (req, res) => {



  //const newCar = new Car({name});

  /*newCar.save()
    .then(() => res.json('Car added!'))
    .catch(err => res.status(400).json('Error: ' + err));*/
});

module.exports = router;