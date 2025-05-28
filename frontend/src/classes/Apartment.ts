class Apartment {
  title: string;
  type: string;
  location: string;
  pricePerNight: number;
  description: string;
  coverImage: string;
  images: string[];
  hostId: string;
  features: string[];
  rules: string[];
  avgRating: number;
  rentalCount: number;
  constructor(
    title: string,
    type: string,
    location: string,
    pricePerNight: number,
    description: string,
    coverImage: string,
    images: string[],
    hostId: string,
    features: string[] = [],
    rules: string[] = [],
    avgRating: number = 0,
    rentalCount: number = 0
  ) {
    this.title = title;
    this.type = type;
    this.location = location;
    this.pricePerNight = pricePerNight;
    this.description = description;
    this.coverImage = coverImage;
    this.images = images;
    this.hostId = hostId;
    this.features = features;
    this.rules = rules;
    this.avgRating = avgRating;
    this.rentalCount = rentalCount;
  }
}

export default Apartment;
