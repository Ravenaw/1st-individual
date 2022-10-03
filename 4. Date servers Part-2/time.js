const express = require("express");
const router = express.Router();
const axios = require("axios");
// set url as constant
const URL = "http://127.0.0.1:8080/timestamp";

/**
 * @swagger
 * tags:
 *   name: Time
 *   description: Show the current time
 */
/**
 * @swagger
 * /timestamp:
 *   get:
 *     summary: Returns the current time as a string
 *     tags: [Time]
 *     responses:
 *       200:
 *         description: The current time
 */

router.get("/", (req, res) => {
  time = Date.now().toString();
  console.log(time);
  res.end(time);
});

/**
 * @swagger
 * /timestamp/python:
 *   get:
 *     summary: Returns the current time as a string
 *     tags: [Time]
 *     responses:
 *       200:
 *         description: The current time
 */

router.get("/python", async (req, res, next) => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
