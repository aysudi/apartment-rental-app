import logo from "../../assets/images/logo-image.jpeg";

const Header = () => {
  return (
    <header>
      <div className="w-">
        <div className="w-[6rem]">
          <img className="w-full h-full" src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
