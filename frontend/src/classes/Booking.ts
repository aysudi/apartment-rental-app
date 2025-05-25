export class Booking {
  apartmentId: string;
  userId: string;
  totalPrice: number;
  role: string;
  status: string;
  bookedDateId: string;
  constructor(
    apartmentId: string,
    userId: string,
    totalPrice: number,
    bookedDateId: string,
    role: string = "client",
    status: string = "pending"
  ) {
    this.apartmentId = apartmentId;
    this.userId = userId;
    this.totalPrice = totalPrice;
    this.bookedDateId = bookedDateId;
    this.role = role;
    this.status = status;
  }
}
