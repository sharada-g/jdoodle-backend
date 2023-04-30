const express = require("express");
const router = express.Router();
const challengesController = require("../controllers/challengesController");

router.get("/", challengesController.getChallenges);

module.exports = router;
