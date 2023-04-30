const steps = require("../models/steps");

exports.getSteps = (req, res) => {
  res.json(steps);
};
