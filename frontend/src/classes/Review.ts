class Review {
  userId: string;
  apartmentId: string;
  rating: number;
  comment: string;
  constructor(
    userId: string,
    apartmentId: string,
    rating: number,
    comment: string
  ) {
    this.userId = userId;
    this.apartmentId = apartmentId;
    this.rating = rating;
    this.comment = comment;
  }
}

export default Review;
