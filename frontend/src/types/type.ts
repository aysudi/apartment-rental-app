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
  reviews: string[];
  bookings: string[];
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
};
