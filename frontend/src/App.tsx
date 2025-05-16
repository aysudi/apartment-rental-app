import { createBrowserRouter, RouterProvider } from "react-router";
import ROUTES from "./routes";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "./context/AuthContext";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </>
  );
}

export default App;
