import { createBrowserRouter, RouterProvider } from "react-router";
import ROUTES from "./routes";
import { Toaster } from "@/components/ui/sonner";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
