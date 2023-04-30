const leaderboard = require("../models/leaderboard");

exports.getLeaderboard = (req, res) => {
  res.json(leaderboard);
};
