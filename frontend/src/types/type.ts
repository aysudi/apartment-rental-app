export type BookedDate = {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  submittedAt: Date;
  deleted: boolean;
};

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
  bookedDates: BookedDate;
  createdAt: Date;
  entrepreneurId: string;
};

export type User = {
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
  startDate: string;
  endDate: string;
  totalPrice: number;
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
