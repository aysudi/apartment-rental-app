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
