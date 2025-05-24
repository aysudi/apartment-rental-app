const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <section
        id="contact"
        className="z-10 relative h-[40rem] text-white flex items-center justify-center flex-col text-center py-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-center">
          Have any questions or want to learn more about Funda? Feel free to
          reach out!
        </p>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Your Message"
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={6}
              ></textarea>
              <button
                type="submit"
                className="bg-[#FF9A1E] text-white py-3 rounded-md text-lg hover:bg-orange-600 transition-colors duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Our Contact Information
            </h2>
            <p className="text-lg mb-4">
              We're here to assist you. Reach out to us through any of the
              methods below:
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Email:</h3>
              <p>contact@funda.com</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Phone:</h3>
              <p>(123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Office Address:</h3>
              <p>1234 Funda St, New York, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Find Us On The Map
          </h2>
          <div className="w-full h-[400px] md:h-[500px] bg-gray-300 rounded-md shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853225988!2d49.69015352443111!3d40.39473700722117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1748085940572!5m2!1sen!2saz"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
