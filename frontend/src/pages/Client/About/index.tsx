const About = () => {
  return (
    <div className="pt-[4.1rem] flex flex-col gap-4">
      <section className="h-[26rem] bg-gray-300">
        <img src="" alt="" />
      </section>
      <section className="flex flex-col gap-12 w-7xl mx-auto my-8">
        <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-3 items-center">
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
