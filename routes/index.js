const { Router } = require("express");
const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", async (req, res, next) => {
    try {
      return res.render("layout");
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
