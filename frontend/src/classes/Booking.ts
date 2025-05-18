export class Booking {
  apartmentId: string;
  userId: string;
  totalPrice: number;
  role: string;
  status: string;
  startDate: string;
  endDate: string;
  constructor(
    apartmentId: string,
    userId: string,
    totalPrice: number,
    startDate: string,
    endDate: string,
    role: string = "client",
    status: string = "pending"
  ) {
    this.apartmentId = apartmentId;
    this.userId = userId;
    this.totalPrice = totalPrice;
    this.startDate = startDate;
    this.endDate = endDate;
    this.role = role;
    this.status = status;
  }
}
