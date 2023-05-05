const express = require("express");
const axios = require("axios");

const cors = require("cors");

const app = express();

const stepsRoute = require("./routes/stepsRoute");
const testimonialsRoute = require("./routes/testimonialsRoute");
const leaderboardRoute = require("./routes/leaderboardRoute");
const challengesRoute = require("./routes/challengesRoute");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/steps", stepsRoute);
app.use("/testimonials", testimonialsRoute);
app.use("/leaderboard", leaderboardRoute);
app.use("/challenges", challengesRoute);

app.post("/token", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.jdoodle.com/v1/auth-token",
      req.body
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/execute", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.jdoodle.com/v1/execute",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
