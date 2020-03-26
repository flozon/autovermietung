const router = require('express').Router();
const Car = require('../models');
const multer = require('multer');
const sharp = require('sharp');

router.route('/').get((req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err));
});

const uuid = () => {
  function _p8(s) {
    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
};

const resize = (images) => {
  images.forEach(ele => {
    sharp("../public/images/temp/" + ele.filename).resize({ height: 500, width: null }).toFile("../public/images/" + ele.filename);
  });
}

const storage = multer.diskStorage({
  destination: '../public/images/temp',
  filename: function (req, file, cb) {
    cb(null, uuid() + ".jpg");
  }
});

const upload = multer({ storage }).fields([{ name: 'main_picture' }, { name: 'add_picture' }]);

router.route('/add').post(upload, (req, res) => {
  resize(req.files['main_picture']);
  resize(req.files['add_picture']);

  const data = req.body;
  const newCar = new Car({
    name: String(data.add_name),
    description: String(data.add_description),
    power: parseInt(data.add_datasheet_power),
    age: parseInt(data.add_datasheet_age),
    main_picture: req.files['main_picture'][0].filename,
    add_picture: req.files['add_picture'].map(ele => ele.filename)
  });

  newCar.save()
    .then(() => res.json('Car added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;