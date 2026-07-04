import SingleRoomImg from "../assets/Single_room.webp";
import TwinRoomImg from "../assets/Twin_room.jpg";
import DoubleRoomImg from "../assets/Double_room.jpg";

const rooms = [
  {
    id: 1,
    title: "Double Rrroom",
    description:
      "Sophisticated king-sized sanctuary with premium linens, a rain shower, and sweeping garden views. Perfect for couples seeking refined comfort.",
    category: "Double",
    cardCategory: "KING-SIZED LUXURY",
    badge: "MOST POPULAR",
    image: DoubleRoomImg,
    roomSize: "32 m²",
    guests: "2 guests",
    amenities: ["King Bed", "Rain Shower", "Garden View", "Mini Bar"],
    price: "$150 / night",
    buttonText: "Book Now",
  },
  {
    id: 2,
    title: "Twin Rrroom",
    description:
      "Well-appointed twin room with two premium single beds, ideal for friends or colleagues. Quality bedding and thoughtful amenities throughout.",
    category: "Twin",
    cardCategory: "FLEXIBLE COMFORT",
    image: TwinRoomImg,
    roomSize: "28 m²",
    guests: "2 guests",
    amenities: ["2 Single Beds", "Desk", "City View", "Coffee Maker"],
    price: "$120 / night",
    buttonText: "Book Now",
  },
  {
    id: 3,
    title: "Single Rrroom",
    description:
      "Elegant single room with a plush single bed and premium linens, everything you need, nothing you don't, designed for the solo traveler",
    category: "Single",
    cardCategory: "EFFICIENT ELEGANCE",
    badge: "BEST VALUE",
    image: SingleRoomImg,
    roomSize: "22 m²",
    guests: "1 guests",
    amenities: [
      "Single Bed",
      "Work Desk",
      "Courtyard View",
      "Coffee Maker",
      "43' Tv",
      "buuuu",
    ],
    startPrice: "Starting from",
    price: "$100 / night",
    buttonText: "Book Now",
  },
];

export default rooms;
