import HostSidebar from "@/components/Host/Sidebar";
import { Outlet } from "react-router";

const HostLayout = () => {
  return (
    <div className="flex min-h-[100vh] h-full">
      <div className="w-1/4">
        <HostSidebar />
      </div>
      <div className="w-3/4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HostLayout;
