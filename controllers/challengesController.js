const challenges = require("../models/challenges");

exports.getChallenges = (req, res) => {
  res.json(challenges);
};
