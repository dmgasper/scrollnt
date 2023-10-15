import express, { json, urlencoded, static as staticc } from "express";
import { connect } from "mongoose";
import indexRouter from "./routes/index.js";
import { getConnectionInfo } from "./config/connection.js";

const app = async () => {
  // Database
  var connectionInfo = await getConnectionInfo();
  connect(connectionInfo.DATABASE_URL, {
    dbName: connectionInfo.DATABASE_NAME,
  });

  const path = process.cwd() + "/scrollnt/views/";
  const app = express();

  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(staticc(path));

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

export default app;
