class BookedDate {
  startDate: Date;
  apartmentId: string;
  endDate: Date;
  constructor(startDate: Date, apartmentId: string, endDate: Date) {
    this.startDate = startDate;
    this.apartmentId = apartmentId;
    this.endDate = endDate;
  }
}

export default BookedDate;
