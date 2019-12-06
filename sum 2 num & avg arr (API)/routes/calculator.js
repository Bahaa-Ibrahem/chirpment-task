const { Number } = require('../models/calculator');
const express    = require('express');
const router     = express.Router();
const Joi        = require('joi');

router.get('/AddNumbers/:num1/:num2', async (req, res) => {
  try {
    let number1= req.params.num1,
    number2= req.params.num2;
    const {error} = validateSum(req.params); 
    if (error) return res.status(400).send(error.details[0].message);

    let number = new Number({ 
      num1: number1,
      num2: number2
    });

    number = await number.save();

    const result = parseInt(number.num1) + parseInt(number.num2);

    res.send(result.toString());
  } catch (error) {
    throw Error(error);
  }
 
});

router.post('/FindAverage', async (req, res) => {
  try {
    const { error } = validateAverage(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let number = new Number({ 
      numbers: req.body.numbers,
    });

    number = await number.save();

    let arr = number.numbers,
        sum = 0,
        length = arr.length,
        Average = 0;

    for (const iterator of arr) {
      sum += parseInt(iterator);
    };
    Average = parseInt(sum)/parseInt(length);
    res.send(Average.toString());
  } catch (error) {
    throw Error(error);
  }
});

// Function to validate tow numbers before sum
function validateSum(result) {
  const schema = {
    num1: Joi.number().min(0).required(),
    num2: Joi.number().min(0).required()
  };
  return Joi.validate(result, schema);
};

// Function to validate array numbers before get average
function validateAverage(Average) {
  const schema = {
    numbers : Joi.array().min(1).required()
  };
  return Joi.validate(Average, schema);
};

module.exports = router;