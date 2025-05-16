import { Link } from "react-router-dom";

const BecomeHost = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-24 pb-16 text-center bg-white w-full">
      <section className="w-full max-w-screen-xl flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          You could earn
        </h1>
        <p className="text-2xl text-gray-800 mb-6">
          <span className="font-semibold">AZN 2,500</span> a month hosting your
          place in Baku
        </p>
        <Link
          to="/become-a-host/start"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 text-lg"
        >
          Get started
        </Link>
        <p className="mt-3 text-sm text-gray-600 underline cursor-pointer">
          Learn how we estimate your earnings
        </p>
      </section>

      <section className="w-full mt-16 px-4">
        <div className="aspect-w-16 aspect-h-9 w-full h-[35rem] max-w-screen-xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853225988!2d49.69015352443111!3d40.39473700722117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1747411123906!5m2!1sen!2saz"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="w-full max-w-7xl mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        <div>
          <img
            src="https://a0.muscache.com/im/mux/I6PbLKE4PdmU2WcRgpIxC01f61MSGKq9tKQmzjO9BOW00/thumbnail.jpg?time=0.0&im_w=960"
            alt="Host your home"
            className="w-full h-104 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Host your home</h3>
          <p className="text-gray-700">
            You’ll have support from a Superhost every step of the way.
          </p>
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/mux/pCleFvVYU2kPzpfl01uy7qNS7nj7OZmeUccdzd5lHCzo/thumbnail.jpg?time=0.0&im_w=960"
            alt="Set your own schedule"
            className="w-full h-104 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Set your own schedule</h3>
          <p className="text-gray-700">
            Decide when you want to host and for how long.
          </p>
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/mux/LOZ9bfCW02wd2keSIUQtEEEGuhW01sd21aDDOWD8iQTuc/thumbnail.jpg?time=0.0&im_w=960"
            alt="List for free"
            className="w-full h-104 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">List for free</h3>
          <p className="text-gray-700">
            You won’t pay anything to list your place.
          </p>
        </div>
      </section>

      <section className="w-full mt-24 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Funda it?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          It’s easy to get started—and we’ll be there every step of the way.
        </p>
        <Link
          to="/become-a-host/start"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 text-lg"
        >
          Start hosting
        </Link>
      </section>
    </div>
  );
};

export default BecomeHost;
