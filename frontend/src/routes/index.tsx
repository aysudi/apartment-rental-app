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
import PrivateRoute from "@/routes/PrivateRoute";
import HostRoute from "./HostRoute";
import AddApartment from "@/pages/Host/AddApartment";
import AdminRoute from "./AdminRoute";
import AdminLayout from "@/layout/Admin";
import AdminDashboard from "@/components/Admin/Dashboard";
import AdminApartments from "@/components/Admin/Apartments";
import AdminBookings from "@/components/Admin/Bookings";
import AdminUsers from "@/components/Admin/Users";

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
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/become-host",
        element: (
          <PrivateRoute>
            <BecomeHost />
          </PrivateRoute>
        ),
      },
      {
        path: "become-host-start",
        element: (
          <PrivateRoute>
            <HostForm />
          </PrivateRoute>
        ),
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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  //host
  {
    path: "/host",
    element: <HostLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <HostRoute>
            <HostDashboard />
          </HostRoute>
        ),
      },
      {
        path: "apartments",
        element: (
          <HostRoute>
            <HostApartments />
          </HostRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <HostRoute>
            <HostBookings />
          </HostRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <HostRoute>
            <HostReviews />
          </HostRoute>
        ),
      },
      {
        path: "add-apartment",
        element: (
          <HostRoute>
            <AddApartment />
          </HostRoute>
        ),
      },
    ],
  },
  //admin
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "apartments",
        element: (
          <AdminRoute>
            <AdminApartments />
          </AdminRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <AdminRoute>
            <AdminBookings />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AdminUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-apartment",
        element: (
          <AdminRoute>
            <AddApartment />
          </AdminRoute>
        ),
      },
    ],
  },
];

export default ROUTES;
