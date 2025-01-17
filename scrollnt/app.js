const express = require("express");
const indexRouter = require("./routes/index.js");
const getConnectionInfo = require("./config/connection.js");
const mongoose = require("mongoose");

const app = async () => {
  // Database
  var connectionInfo = await getConnectionInfo();
  mongoose.connect(connectionInfo.DATABASE_URL, {
    dbName: connectionInfo.DATABASE_NAME,
  });

  const path = process.cwd() + "/scrollnt/";

  const app = express();

  // Allow front-end origin in development mode
  if (app.get("env") === "development") {
    const cors = require("cors");
    const corsOptions = {
      origins: "http://localhost:8080",
    };
    app.use(cors(corsOptions));
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path + "views"));
  app.use("/images", express.static(path + "images"));

  app.use("/", indexRouter);

  app.get("/", function (req, res) {
    res.sendFile(path + "index.html");
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).json({
      message: err.message,
      error: err,
    });
  });

  return app;
};

module.exports = app;
