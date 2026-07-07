const places = [
  /* LANDMARKS */
  {
    id: 1,
    category: "landmark",
    name: "Bole Medhanialem Cathedral",
    distance: "200 m · 3 min walk",
    distanceNum: 0.2,
    tag: "Landmark",
    tagColor: "#7b3f00",
    icon: "fa-solid fa-church",
    hours: "Open daily · Services 6am & 3pm",
    image:
      "https://images.unsplash.com/photo-1543038928-39e3a87df895?w=700&q=80",
    description:
      "One of Addis Ababa's most iconic Orthodox churches, featuring stunning Ethiopian architecture, intricate frescoes and a serene courtyard — a must-visit spiritual landmark steps from the hotel.",
    tips: "Visit on Sunday morning for the full ceremonial experience.",
  },
  {
    id: 2,
    category: "landmark",
    name: "Bole International Airport",
    distance: "1 km · 5 min shuttle",
    distanceNum: 1,
    tag: "Airport",
    tagColor: "#185fa5",
    icon: "fa-solid fa-plane-arrival",
    hours: "Open 24 hours",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80",
    description:
      "Ethiopia's main international gateway is just 1 km from Garden Inn. Our complimentary 24/7 shuttle tracks your flight in real time — you'll never wait at arrivals.",
    tips: "Request our free shuttle when you book — available for arrivals & departures.",
  },

  /* SHOPPING MALLS */
  {
    id: 3,
    category: "mall",
    name: "Edna Mall",
    distance: "350 m · 4 min walk",
    distanceNum: 0.35,
    tag: "Shopping Mall",
    tagColor: C.darkGreen,
    icon: "fa-solid fa-bag-shopping",
    hours: "Daily 8am – 10pm",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=700&q=80",
    description:
      "Addis Ababa's premier entertainment mall directly behind the hotel. Features Mattu Multiplex Cinema, a kids' game zone, fitness centre with pool, bowling, fashion boutiques, and international dining.",
    tips: "Catch an evening film after dinner — tickets sell out on weekends, book ahead.",
  },
  {
    id: 4,
    category: "mall",
    name: "Medhanialem Mall",
    distance: "250 m · 3 min walk",
    distanceNum: 0.25,
    tag: "Shopping Mall",
    tagColor: C.darkGreen,
    icon: "fa-solid fa-store",
    hours: "Daily 8am – 10pm",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&q=80",
    description:
      "Right at the heart of Bole Medhanialem, this flagship mall features a 7D cinema, 3D cinema, a popular kids' arcade, fashion stores, cafés, and easy access via LRT and taxi.",
    tips: "Yem Fashion on the ground floor stocks high-end shoes, perfumes and accessories.",
  },
  {
    id: 5,
    category: "mall",
    name: "Morning Star Mall",
    distance: "400 m · 5 min walk",
    distanceNum: 0.4,
    tag: "Shopping Mall",
    tagColor: C.darkGreen,
    icon: "fa-solid fa-building",
    hours: "Daily 9am – 10pm",
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=700&q=80",
    description:
      "Tucked just behind Edna Mall, Morning Star Mall blends traditional Ethiopian crafts with high-end fashion boutiques — a great spot for authentic souvenirs alongside modern shopping.",
    tips: "Great for gifting — browse traditional scarves, jewellery, and handwoven textiles.",
  },
  {
    id: 6,
    category: "mall",
    name: "Mafi City Mall",
    distance: "150 m · 2 min walk",
    distanceNum: 0.15,
    tag: "Shopping Mall",
    tagColor: C.darkGreen,
    icon: "fa-solid fa-shop",
    hours: "Daily 8am – 10pm",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80",
    description:
      "Practically on the hotel's doorstep on Cameroon Street in front of Medhanialem Church. A compact, vibrant mall with clothing stores, electronics, beauty shops and casual eateries.",
    tips: "Closest mall to the hotel — perfect for a quick browse or grocery run.",
  },

  /* SUPERMARKETS */
  {
    id: 7,
    category: "super",
    name: "Shoa Shopping Center",
    distance: "500 m · 6 min walk",
    distanceNum: 0.5,
    tag: "Supermarket",
    tagColor: "#0f6e56",
    icon: "fa-solid fa-cart-shopping",
    hours: "Daily 7am – 9pm",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=700&q=80",
    description:
      "One of Addis Ababa's best-stocked supermarkets — fresh dairy, vegetables, meat and poultry, household goods, beauty supplies, and imported items. A staple for residents and long-stay guests.",
    tips: "Fresh produce arrives in the morning — shop before 10am for the best selection.",
  },
  {
    id: 8,
    category: "super",
    name: "Safeway Supermarket",
    distance: "600 m · 7 min walk",
    distanceNum: 0.6,
    tag: "Supermarket",
    tagColor: "#0f6e56",
    icon: "fa-solid fa-basket-shopping",
    hours: "Daily 7am – 9pm",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=700&q=80",
    description:
      "A well-established supermarket in the Bole area carrying a broad range of groceries, imported snacks and beverages, personal care products, and ready-to-eat meals.",
    tips: "Good selection of international products and local Ethiopian staples side by side.",
  },

  /* DINING */
  {
    id: 9,
    category: "dining",
    name: "2000 Habesha Cultural Restaurant",
    distance: "1.2 km · 8 min taxi",
    distanceNum: 1.2,
    tag: "Ethiopian Cuisine",
    tagColor: "#7b3f00",
    icon: "fa-solid fa-bowl-food",
    hours: "Daily 12pm – 11pm · Shows from 7pm",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
    description:
      "Widely regarded as one of the most authentic Ethiopian restaurants in Addis. Traditional injera, rich stews, and live cultural music and dance performances every evening from 7pm.",
    tips: "Reserve in advance for the evening show — extremely popular with visitors.",
  },
  {
    id: 10,
    category: "dining",
    name: "Yod Abyssinia Cultural Restaurant",
    distance: "1.5 km · 10 min taxi",
    distanceNum: 1.5,
    tag: "Cultural Dining",
    tagColor: "#7b3f00",
    icon: "fa-solid fa-music",
    hours: "Daily 12pm – 11pm · Shows 7pm",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80",
    description:
      "A Bole institution — traditional Ethiopian food, a traditional clothing shop, and spectacular nightly cultural dance shows. A must for first-time visitors to Addis Ababa.",
    tips: "Order the mix fasting platter — a spectacular assortment of vegetarian Ethiopian dishes.",
  },
  {
    id: 11,
    category: "dining",
    name: "Black Pearl Lounge & Sports Bar",
    distance: "300 m · 4 min walk",
    distanceNum: 0.3,
    tag: "Bar & Lounge",
    tagColor: "#1a1a4e",
    icon: "fa-solid fa-martini-glass",
    hours: "Daily 4pm – 2am",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&q=80",
    description:
      "A lively sports bar and lounge just around the corner, with big screens for live football, a full cocktail menu, and a solid food menu. Popular expat and local nightspot.",
    tips: "Best spot to watch Premier League or African Championship matches.",
  },
  {
    id: 12,
    category: "dining",
    name: "Tomoca Coffee",
    distance: "800 m · 5 min taxi",
    distanceNum: 0.8,
    tag: "Coffee",
    tagColor: "#6b3a2a",
    icon: "fa-solid fa-mug-hot",
    hours: "Daily 7am – 8pm",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80",
    description:
      "Ethiopia is the birthplace of coffee, and Tomoca is its temple. This legendary Addis roaster has been serving some of the world's finest arabica since 1953. A pilgrimage for coffee lovers.",
    tips: "Try a macchiato — the Ethiopian way to drink coffee. Then buy a bag of whole beans to take home.",
  },

  /* BEAUTY */
  {
    id: 13,
    category: "beauty",
    name: "Bole Beauty & Hair Salon Strip",
    distance: "100 – 400 m · 1–5 min walk",
    distanceNum: 0.1,
    tag: "Beauty & Salon",
    tagColor: "#a3006a",
    icon: "fa-solid fa-scissors",
    hours: "Daily 8am – 8pm",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
    description:
      "Cameroon Street around Medhanialem Church is lined with beauty parlours, modern hair salons, and barbershops catering to local and international clients. From braiding to blowouts.",
    tips: "Prices are very reasonable — a full hair treatment costs a fraction of Western rates.",
  },
  {
    id: 14,
    category: "beauty",
    name: "Laphto Mall Boutiques",
    distance: "2 km · 8 min taxi",
    distanceNum: 2,
    tag: "Fashion & Beauty",
    tagColor: "#a3006a",
    icon: "fa-solid fa-shirt",
    hours: "Daily 9am – 9pm",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
    description:
      "One of Addis Ababa's most upscale malls near Old Airport, housing premium fashion boutiques, beauty brands, salons, cafés, and a well-maintained food court.",
    tips: "Great for designer Ethiopian fashion labels — pick up a handwoven habesha kemis.",
  },
];
