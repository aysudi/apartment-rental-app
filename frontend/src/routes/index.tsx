import BecomeHost from "@/pages/Client/BecomeHost";
import ClientLayout from "../layout/Client";
import ApartmentDetails from "../pages/Client/ApartmentDetails";
import Apartments from "../pages/Client/Apartments";
import Contact from "../pages/Client/Contact";
import Home from "../pages/Client/Home";
import UserProfile from "../pages/Client/Profile";
import Wishlist from "../pages/Client/Wishlist";
import Login from "../pages/Common/Login";
import Register from "../pages/Common/Register";

const ROUTES = [
  //client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apartments",
        element: <Apartments />,
      },
      {
        path: "apartment-details",
        children: [
          {
            path: ":id",
            element: <ApartmentDetails />,
          },
        ],
      },
      {
        path: "user",
        element: <UserProfile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/become-host",
        element: <BecomeHost />,
      },
    ],
  },
];

export default ROUTES;
