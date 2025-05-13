import { Link } from "react-router";
import img from "../../../assets/images/home-image.jpeg";
import { Check } from "lucide-react";
import SliderComponent from "../../../components/HomeSlider";

const Home = () => {
  return (
    <main>
      <section id="hero" className="h-[66.7vh] pt-[4rem]">
        <div className="flex justify-center text-white w-[70%] h-[100%] items-center ">
          <div className="w-[60%] m-auto flex flex-col gap-[1rem] ">
            <h1 className="font-bold text-6xl text-center">
              Want to know what your house is worth?
            </h1>
            <p className="text-xl text-center">
              Via My Home, you get direct insight into your house and your
              neighbourhood.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[4rem] flex flex-col gap-5">
          <div className="flex flex-col gap-1 justify-center items-center mb-3">
            <h2 className="font-bold text-2xl">Featured Apartments</h2>
            <p className="text-gray-500">
              Discover our handpicked selection of premium apartments, offering
              exceptional comfort and style for your next stay.
            </p>
          </div>
          <SliderComponent />
          <Link
            to={"/apartments"}
            className="mx-auto mt-4 py-[0.6rem] w-[13rem] rounded-lg border border-gray-300 flex items-center justify-center font-medium cursor-pointer"
          >
            View All Apartments
          </Link>
        </div>
      </section>
      <section className="bg-[#E6F6FF] ">
        <div className="w-[60%] mx-auto py-[4rem] flex justify-around gap-2 ">
          <div className="flex flex-col gap-2 justify-center">
            <h3 className="text-3xl font-bold">Get home recommendations</h3>
            <p className="text-gray-600 text-lg">
              Sign in for a more personalized experience.
            </p>
            <Link
              to={"/register"}
              className="text-lg border-1 rounded-lg font-bold text-[#0133AA] mt-[0.5rem] py-2 w-[5.9rem] flex justify-center hover:bg-[#0133AA] hover:text-white "
            >
              Sign in
            </Link>
          </div>
          <div className="w-[20rem] ">
            <img className="w-[full] h-[full] rounded-2xl " src={img} alt="" />
          </div>
        </div>
      </section>
      <section className="w-[70%] mx-auto pt-[6rem] flex justify-between gap-2">
        <div className="w-[25rem] h-[15rem] ml-6">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://nuxt.fstatic.nl/eecf9a6ac9bc47c8/mijn-huis/_nuxt/phone-my-home.CQHiM1Rz.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-end pb-8">
          <h3 className="font-bold text-3xl">What to expect in My Home</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 text-lg items-center">
              <Check className="text-[#0171B2] " />
              <span>Follow the changing value of your house</span>
            </div>
            <div className="flex gap-2 text-lg items-center">
              <Check className="text-[#0171B2] " />
              <span>
                Follow the interest of buyers for your type of house and
                neighbourhood
              </span>
            </div>
            <div className="flex gap-2 text-lg items-center">
              <Check className="text-[#0171B2] " />
              <span>
                Follow which houses in your neighbourhood are on sale and have
                been sold
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
