import ClientLayout from "../layout/Client";
import Apartments from "../pages/Client/Apartments";
import Contact from "../pages/Client/Contact";
import Home from "../pages/Client/Home";
import UserProfile from "../pages/Client/Profile";
import Wishlist from "../pages/Client/Wishlist";

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
        path: "/apartments",
        element: <Apartments />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];

export default ROUTES;
