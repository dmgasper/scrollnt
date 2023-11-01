const express = require("express");
const MousePositionLog = require("../models/mouseLog.js");

const router = express.Router();

router.post("/addMousePositionLog", function (req, res, next) {
  console.log(req);

  const createDate = Date.now();
  const initials = req.body.initials;
  const isExperimentGroup = req.body.isExperimentGroup;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const mousePosition = req.body.mousePosition;

  const mousePositionLog = new MousePositionLog({
    createDate: createDate,
    initials: initials,
    isExperimentGroup: isExperimentGroup,
    startDate: startDate,
    endDate: endDate,
    mousePosition: mousePosition,
  });

  mousePositionLog
    .save()
    .then(() => {
      res.status(201).send(mousePositionLog);
    })
    .catch((err) => {
      console.log(mousePositionLog);
      res.send(err);
    });
});

module.exports = router;
