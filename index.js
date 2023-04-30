const express = require("express");

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

app.use("/steps", stepsRoute);
app.use("/testimonials", testimonialsRoute);
app.use("/leaderboard", leaderboardRoute);
app.use("/challenges", challengesRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
