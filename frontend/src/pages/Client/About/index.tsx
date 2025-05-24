const About = () => {
  return (
    <div className="pt-[4.1rem] flex flex-col gap-4">
      <section
        id="about"
        className="h-[50rem] relative z-0 flex flex-col gap-2 justify-center items-center text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
          About Funda
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-center">
          Redefining the apartment rental experience since 2018
        </p>
      </section>

      <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-8">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Michael Scott"
              />
            </div>
            <h3 className="text-xl font-bold">Michael Scott</h3>
            <span className="text-gray-500 text-sm">CEO & Founder</span>
            <p className="text-center text-sm">
              Michael founded LuxStay in 2018 with a vision to transform the
              apartment rental experience.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                alt="Sarah Johnson"
              />
            </div>
            <h3 className="text-xl font-bold">Sarah Johnson</h3>
            <span className="text-gray-500 text-sm">
              Chief Operations Officer
            </span>
            <p className="text-center text-sm">
              Sarah oversees all operational aspects of LuxStay, ensuring
              exceptional service for hosts and guests alike.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.freepik.com/256/15810/15810033.png?semt=ais_hybrid"
                alt="David Chen"
              />
            </div>
            <h3 className="text-xl font-bold">David Chen</h3>
            <span className="text-gray-500 text-sm">
              Chief Technology Officer
            </span>
            <p className="text-center text-sm">
              David leads our technology team, building innovative solutions to
              make apartment rentals seamless.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/6997/6997668.png"
                alt="Emma Rodriguez"
              />
            </div>
            <h3 className="text-xl font-bold">Emma Rodriguez</h3>
            <span className="text-gray-500 text-sm">
              Head of Customer Experience
            </span>
            <p className="text-center text-sm">
              Emma is dedicated to creating memorable experiences for every
              LuxStay guest and host.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg shadow-lg">
              <h4 className="text-center text-xl font-bold">Quality</h4>
              <p className="text-center text-sm">
                We maintain the highest standards for all properties on our
                platform.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg shadow-lg">
              <h4 className="text-center text-xl font-bold">Trust</h4>
              <p className="text-center text-sm">
                We build trust through transparency, reliability, and
                exceptional service.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg shadow-lg">
              <h4 className="text-center text-xl font-bold">Innovation</h4>
              <p className="text-center text-sm">
                We continuously improve our platform to enhance the rental
                experience.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg shadow-lg">
              <h4 className="text-center text-xl font-bold">Community</h4>
              <p className="text-center text-sm">
                We foster connections between hosts and guests from around the
                world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
