import Restaurant from "../Models/Restaurant.js";

export const getRestaurant = async (req, res) => {
  try {
    const user = await Restaurant.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error at getRestaurant" });
    console.error("Err", error);
  }
};

export const reserveTable = async (req, res) => {
  try {
    const { tableNo, guestNo, date } = req.body;
    const Reserve = new Restaurant({
      user: req.user.id,
      tableNo,
      guestNo,
      date,
    });
    await Reserve.save();

    res.status(200).json({ message: "Reserved Table succesfully" });
  } catch (error) {
    console.error("ERR at Reserve table", error);
  }
};
