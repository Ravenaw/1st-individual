const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Time
 *   description: Show the current time
 */
/**
 * @swagger
 * /:
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

module.exports = router;
