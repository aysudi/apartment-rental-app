import AdminSidebar from "@/components/Admin/Sidebar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex min-h-[100vh] h-full">
      <div className="w-1/4">
        <AdminSidebar />
      </div>
      <div className="w-3/4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
