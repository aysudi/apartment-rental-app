export type Apartment = {
  id: string;
  title: string;
  type: string;
  location: string;
  pricePerNight: number;
  coverImage: string;
  images: string[];
  description: string;
  features: string[];
  rules: string[];
  bookedDates: BookedDate;
  createdAt: Date;
  avgRating: number;
  entrepreneurId: string;
  rentalCount: number;
  deleted: boolean;
  reviews: Review[];
  bookings: string[];
  host: User;
};

export type NewApartment = {
  title: string;
  type: string;
  location: string;
  pricePerNight: number;
  coverImage: string;
  images: string[];
  description: string;
  features: string[];
  rules: string[];
  hostId: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  profileImage: string;
  balance: number;
  hostRequest: boolean;
  isBanned: boolean;
  deleted: boolean;
  createdAt: string;
  reviews: string[];
  bookings: Booking[];
};

export type RegisteredUser = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type Booking = {
  userId: string;
  apartmentId: string;
  apartment: Apartment;
  bookedDateId: string;
  totalPrice: number;
  createdAt: Date;
  bookedDates: BookedDate;
};

export type Review = {
  id: string;
  user: User;
  userId: string;
  apartment: Apartment;
  apartmentId: string;
  rating: number;
  comment: string;
};

export type PostedReview = {
  userId: string;
  apartmentId: string;
  rating: number;
  comment: string;
};

export type BookedDate = {
  startDate: Date;
  apartmentId: string;
  endDate: Date;
};
