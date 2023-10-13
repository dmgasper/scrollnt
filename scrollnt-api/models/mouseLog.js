const mongoose = require("mongoose");

const mousePositionLog = new mongoose.Schema({
  createDate: { type: Date, required: true },
  isExperimentGroup: { type: Boolean, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  mousePosition: {
    type: [
      {
        date: Date,
        position: { x: Number, y: Number },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("MousePositionLog", mousePositionLog);
