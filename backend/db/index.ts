const apartments = [
  {
    title: "Sunny Beach Villa",
    type: "villa",
    location: "Miami, FL",
    pricePerNight: 250.0,
    coverImage: "/assets/images/villa1.jpg",
    images: ["/assets/images/villa1_1.jpg", "/assets/images/villa1_2.jpg"],
    description:
      "A beautiful villa near the beach, perfect for a relaxing getaway.",
    features: ["Private pool", "Ocean view", "5 bedrooms", "Luxury kitchen"],
    rules: ["No smoking", "Pet-friendly", "No parties"],
    avgRating: 4.8,
    rentalCount: 15,
    entrepreneurId: "user-1",
  },
  {
    title: "City Center Apartment",
    type: "apartment",
    location: "New York, NY",
    pricePerNight: 180.0,
    coverImage: "/assets/images/apartment1.jpg",
    images: [
      "/assets/images/apartment1_1.jpg",
      "/assets/images/apartment1_2.jpg",
    ],
    description:
      "Modern apartment in the heart of NYC, perfect for city explorers.",
    features: ["Free WiFi", "Gym access", "Close to subway", "City view"],
    rules: ["No pets", "No smoking inside"],
    avgRating: 4.5,
    rentalCount: 25,
    entrepreneurId: "user-2",
  },
  {
    title: "Mountain Retreat Cabin",
    type: "cabin",
    location: "Aspen, CO",
    pricePerNight: 300.0,
    coverImage: "/assets/images/cabin1.jpg",
    images: ["/assets/images/cabin1_1.jpg", "/assets/images/cabin1_2.jpg"],
    description: "Cozy cabin in the mountains, perfect for winter getaways.",
    features: ["Fireplace", "Hot tub", "Near ski resort", "Quiet location"],
    rules: ["No pets", "No smoking"],
    avgRating: 4.9,
    rentalCount: 10,
    entrepreneurId: "user-3",
  },
  {
    title: "Treehouse in the Forest",
    type: "treehouse",
    location: "Portland, OR",
    pricePerNight: 220.0,
    coverImage: "/assets/images/treehouse1.jpg",
    images: [
      "/assets/images/treehouse1_1.jpg",
      "/assets/images/treehouse1_2.jpg",
    ],
    description:
      "A unique treehouse experience in the forest, with modern amenities.",
    features: [
      "Forest view",
      "Eco-friendly",
      "Hiking trails nearby",
      "Outdoor deck",
    ],
    rules: ["No smoking", "No loud music"],
    avgRating: 4.7,
    rentalCount: 8,
    entrepreneurId: "user-4",
  },
  {
    title: "Luxury Penthouse",
    type: "penthouse",
    location: "Los Angeles, CA",
    pricePerNight: 500.0,
    coverImage: "/assets/images/penthouse1.jpg",
    images: [
      "/assets/images/penthouse1_1.jpg",
      "/assets/images/penthouse1_2.jpg",
    ],
    description:
      "Elegant penthouse with panoramic views of the city and ocean.",
    features: [
      "Private rooftop",
      "Jacuzzi",
      "Floor-to-ceiling windows",
      "Walk-in closet",
    ],
    rules: ["No pets", "No parties", "Guests by approval"],
    avgRating: 5.0,
    rentalCount: 30,
    entrepreneurId: "user-5",
  },
];

// async function seedApartments() {
//   for (const apartment of apartments) {
//     await prisma.apartment.create({
//       data: apartment,
//     });
//   }
// }

// seedApartments();
