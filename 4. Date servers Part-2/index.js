const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const timeRouter = require("./time");

const PORT = process.env.PORT || 8081;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Time API",
      version: "1.0.0",
      description: "A simple Express API",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["./*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());
app.use("/timestamp", timeRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
