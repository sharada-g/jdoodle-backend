const express = require("express");
const router = express.Router();
const stepsController = require("../controllers/stepsController");

router.get("/", stepsController.getSteps);

module.exports = router;
