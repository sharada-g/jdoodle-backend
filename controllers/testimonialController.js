const testimonials = require("../models/testimonials");

exports.getTestimonials = (req, res) => {
  res.json(testimonials);
};
