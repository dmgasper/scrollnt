const mongoose = require("mongoose");

const mousePositionLog = new mongoose.Schema({
  createDate: { type: Date, required: true },
  initials: { type: String, required: true },
  isExperimentGroup: { type: Boolean, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  mousePosition: {
    type: [
      {
        date: { type: Date, required: true },
        x: { type: Number, required: true },
        y: { type: Number, required: true },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("MousePositionLog", mousePositionLog);
