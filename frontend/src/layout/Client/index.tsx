import { Outlet } from "react-router";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
