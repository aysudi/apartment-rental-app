import { Link } from "react-router";
import img from "../../../assets/images/home-image.jpeg";
import { Check } from "lucide-react";
import SliderComponent from "../../../components/HomeSlider";

const Home = () => {
  return (
    <main className="w-full">
      <section id="hero" className="relative h-[66.7vh] pt-[4rem]">
        <div className="flex justify-center items-center h-full w-full">
          <div className="px-4 md:px-8 max-w-4xl text-center text-white">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Want to know what your house is worth?
            </h1>
            <p className="text-lg md:text-xl">
              Via My Home, you get direct insight into your house and your
              neighbourhood.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl">
            Featured Apartments
          </h2>
          <p className="text-gray-600">
            Discover our handpicked selection of premium apartments, offering
            exceptional comfort and style for your next stay.
          </p>
        </div>
        <div className="mt-6">
          <SliderComponent />
        </div>
        <Link
          to="/apartments"
          className="mx-auto mt-6 block w-52 text-center py-2 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 transition"
        >
          View All Apartments
        </Link>
      </section>

      <section className="bg-[#E6F6FF] py-16 px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Get home recommendations
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Sign in for a more personalized experience.
            </p>
            <Link
              to="/register"
              className="inline-block mt-4 px-6 py-2 rounded-lg border border-[#0133AA] text-[#0133AA] font-bold hover:bg-[#0133AA] hover:text-white transition"
            >
              Sign in
            </Link>
          </div>
          <div className="flex-1">
            <img
              src={img}
              alt="Home recommendation"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src="https://nuxt.fstatic.nl/eecf9a6ac9bc47c8/mijn-huis/_nuxt/phone-my-home.CQHiM1Rz.png"
            alt="What to expect"
            className="w-full max-w-xs mx-auto lg:mx-0 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-2xl sm:text-3xl mb-4">
            What to expect in My Home
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-lg">
              <Check className="text-[#0171B2]" />
              <span>Follow the changing value of your house</span>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <Check className="text-[#0171B2]" />
              <span>
                Follow the interest of buyers for your type of house and
                neighbourhood
              </span>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <Check className="text-[#0171B2]" />
              <span>
                Follow which houses in your neighbourhood are on sale and have
                been sold
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
