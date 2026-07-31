import mongoose from "mongoose";
import User from "./User";

const restaurantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tableNo: {
    type: Number,
    required,
  },
  guestNo: {
    type: Number,
    min: 1,
    required,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Restaurant = mongoose.Model("Restaurant", restaurantSchema);
export default Restaurant;
