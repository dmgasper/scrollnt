import { Schema, model } from "mongoose";

const mousePositionLog = new Schema({
  createDate: { type: Date, required: true },
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

export default model("MousePositionLog", mousePositionLog);
