const About = () => {
  return (
    <div className="pt-[4.1rem] flex flex-col gap-4">
      <section
        id={"about"}
        className="h-[50rem] relative z-1 flex flex-col gap-2 justify-center items-center text-white"
      >
        <h1 className="text-7xl font-bold">About Funda</h1>
        <p className="text-xl">
          Redefining the apartment rental experience since 2018
        </p>
      </section>
      <section className="flex flex-col gap-12 w-7xl mx-auto my-8">
        <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[7rem]">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
            </div>
            <div className="text-center flex flex-col gap-1">
              <h3 className="text-xl font-bold">Michael Scott</h3>
              <span className="text-gray-500 text-[0.95rem]">
                CEO & Founder
              </span>
              <p>
                Michael founded LuxStay in 2018 with a vision to transform the
                apartment rental experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[7rem]">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                alt=""
              />
            </div>
            <div className="text-center flex flex-col gap-1">
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <span className="text-gray-500 text-[0.95rem]">
                Chief Operations Officer
              </span>
              <p>
                Sarah oversees all operational aspects of LuxStay, ensuring
                exceptional service for hosts and guests alike.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[7rem]">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.freepik.com/256/15810/15810033.png?semt=ais_hybrid"
                alt=""
              />
            </div>
            <div className="text-center flex flex-col gap-1">
              <h3 className="text-xl font-bold">David Chen</h3>
              <span className="text-gray-500 text-[0.95rem]">
                Chief Technology Officer
              </span>
              <p>
                David leads our technology team, building innovative solutions
                to make apartment rentals seamless.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[7rem]">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/6997/6997668.png"
                alt=""
              />
            </div>
            <div className="text-center flex flex-col gap-1">
              <h3 className="text-xl font-bold">Emma Rodriguez</h3>
              <span className="text-gray-500 text-[0.95rem]">
                Head of Customer Experience
              </span>
              <p>
                Emma is dedicated to creating memorable experiences for every
                LuxStay guest and host.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-50 py-12">
        <div className="w-7xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg">
              <h4 className="text-center text-xl font-bold">Quality</h4>
              <p className="text-center">
                We maintain the highest standards for all properties on our
                platform.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg">
              <h4 className="text-center text-xl font-bold">Trust</h4>
              <p className="text-center">
                We build trust through transparency, reliability, and
                exceptional service.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg">
              <h4 className="text-center text-xl font-bold">Innovation</h4>
              <p className="text-center">
                We continuously improve our platform to enhance the rental
                experience.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-6 bg-white border rounded-lg">
              <h4 className="text-center text-xl font-bold">Community</h4>
              <p className="text-center">
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
