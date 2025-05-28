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
import About from "@/pages/Client/About";
import EditProfile from "@/pages/Client/EditProfile";
import HostForm from "@/pages/Client/HostForm";
import HostLayout from "@/layout/Host";
import HostDashboard from "@/pages/Host/Dashboard";
import HostApartments from "@/pages/Host/Apartments";
import HostBookings from "@/pages/Host/Bookings";
import HostReviews from "@/pages/Host/Reviews";

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
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
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
      {
        path: "become-host-start",
        element: <HostForm />,
      },
    ],
  },
  {
    path: "/host",
    element: <HostLayout />,
    children: [
      {
        path: "dashboard",
        element: <HostDashboard />,
      },
      {
        path: "apartments",
        element: <HostApartments />,
      },
      {
        path: "bookings",
        element: <HostBookings />,
      },
      {
        path: "reviews",
        element: <HostReviews />,
      },
    ],
  },
];

export default ROUTES;
