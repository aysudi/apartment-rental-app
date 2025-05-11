import { Link } from "react-router";

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
      <section>
        <div>
          <h3>Get home recommendations</h3>
          <p>Sign in for a more personalized experience.</p>
          <Link to={"/register"}>Sign in</Link>
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default Home;
