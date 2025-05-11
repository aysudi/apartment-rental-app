import { Link } from "react-router";
import img from "../../../assets/images/home-image.jpeg";

const Home = () => {
  return (
    <main>
      <section id="hero" className="h-[50vh] ">
        <div className="flex justify-center text-white w-[60%] h-[100%] items-center ">
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
      <section className="bg-[#E6F6FF] ">
        <div className="w-[52%] mx-auto py-[6rem] flex justify-between gap-2 ">
          <div className="flex flex-col gap-2 justify-center">
            <h3 className="text-3xl font-bold">Get home recommendations</h3>
            <p className="text-gray-600 text-lg">
              Sign in for a more personalized experience.
            </p>
            <Link
              to={"/register"}
              className="text-lg border-1 rounded-lg font-bold text-[#0133AA] mt-[0.5rem] py-2 w-[5.9rem] flex justify-center "
            >
              Sign in
            </Link>
          </div>
          <div className="w-[20rem] ">
            <img className="w-[full] h-[full] rounded-2xl " src={img} alt="" />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Home;
