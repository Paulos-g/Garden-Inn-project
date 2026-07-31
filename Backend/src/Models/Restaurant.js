import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tableNo: {
    type: Number,
    required: true,
  },
  guestNo: {
    type: Number,
    min: 1,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
