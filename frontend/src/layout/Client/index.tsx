import { Outlet } from "react-router";
import Header from "../../components/Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;
