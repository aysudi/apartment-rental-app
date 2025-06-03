const BookingInfo = ({
  apartment,
  totalPrice,
}: {
  apartment: any;
  totalPrice: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p>
          ${apartment.pricePerNight} {"\u00D7"} 1 night
        </p>
        <p>${totalPrice && totalPrice - 80}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Cleaning fee</p>
        <p>$50</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Service fee</p>
        <p>$30</p>
      </div>
      <hr />
      <div className="flex justify-between items-center font-bold text-lg">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default BookingInfo;
