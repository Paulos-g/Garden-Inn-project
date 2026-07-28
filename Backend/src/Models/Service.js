import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    guest: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  },
);
const Service = mongoose.model("Service", serviceSchema);
export default Service;
